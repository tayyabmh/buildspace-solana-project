import { useEffect, useState } from 'react';
import {Program, Provider, web3} from '@project-serum/anchor';
import { Connection, PublicKey, clusterApiUrl} from '@solana/web3.js';
import idl from './idl.json';
import kp from './keypair.json';
import twitterLogo from './assets/twitter-logo.svg';
import './App.css';

// Constants
const TWITTER_HANDLE = 'itsTayyab';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;


const { SystemProgram } = web3;

const arr = Object.values(kp._keypair.secretKey);
const secret = new Uint8Array(arr);
const baseAccount = web3.Keypair.fromSecretKey(secret);

const programID = new PublicKey(idl.metadata.address);

const network = clusterApiUrl('devnet')

const opts = {
  preflightCommitment: "processed"
}

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [gifList, setGifList] = useState([]);


  //Check Wallet Connect Status
  const checkIfWalletIsConnected = async() => {
    try {
      const { solana } = window;
      if (solana) {
        if(solana.isPhantom) {
          console.log('h')
          const response = await solana.connect({onlyIfTrusted: true});
          console.log("Public Key: ", response.publicKey.toString())
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert('nah')
      }
    } catch(err) {
      console.error(err);
    }
  }

  const getProvider = () => {
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new Provider(
      connection, window.solana, opts.preflightCommitment
    );
    return provider;
  }

  const connectWallet = async () => {
    const { solana } = window;
  
    if (solana) {
      const response = await solana.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  const onInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const sendGif = async () => {
    if(inputValue.length === 0) {
      console.log('No gif link given!');
      return;
    }
    console.log("Gif Link: ", inputValue);
    try {
      const provider = getProvider();
      const program = new Program(idl, programID, provider);

      await program.rpc.addGif(inputValue, {
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey
        }
      });
      console.log('GIF successfully sent to Program: ', inputValue);
      await getGifList();
    } catch(err) {
      console.error("Error in sending GIF: ", err);
    }
  };
  /*
   * We want to render this UI when the user hasn't connected
   * their wallet to our app yet.
   */
  const renderNotConnectedContainer = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );
  
  const renderConnectedContainer = () => {
    if (gifList === null) {
      return (
        <div className='connected-container'>
          <button className="cta-button submit-gif-button" onClick={createGifAccount}>
            Do One-Time Initilization for GIF Program Account
          </button>
        </div>
      )
    }
    else {
      return (
        <div className="connected-container">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            sendGif();
          }}
        >
          <input
            type="text"
            placeholder="Enter gif link!"
            value={inputValue}
            onChange={onInputChange}
          />
          <button type="submit" className="cta-button submit-gif-button">
            Submit
          </button>
        </form>
        <div className="gif-grid">
					{/* We use index as the key instead, also, the src is now item.gifLink */}
          {gifList.map((item, index) => (
            <div className="gif-item" key={index}>
              <img src={item.gifLink} />
            </div>
          ))}
        </div>
      </div>
      )
    }
  };

  const createGifAccount = async() => {
    try {
      const provider = getProvider();
      const program = new Program(idl, programID, provider);
      console.log("Performing ping...")
      await program.rpc.startStuffOff({
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId
        },
        signers: [baseAccount]
      });
      console.log("Create a new BaseAccount with address: ", baseAccount.publicKey.toString());
      await getGifList();
    } catch(err) {
      console.log("Error creating BaseAccount: ", err);
    }
  }

  const getGifList = async() => {
    try {
      const provider = getProvider();
      const program = new Program(idl, programID, provider)
      const account = await program.account.baseAccount.fetch(baseAccount.publicKey);

      console.log("Got the account", account);
      setGifList(account.gifList)
    } catch (err) {
      console.log("Error in getGifs: ", err);
      setGifList(null);
    }
  }

  //Use effect for wallet check
  useEffect(() => {
    const onLoad = async() => {
      await checkIfWalletIsConnected();
    }
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  },[]);

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);
  
  useEffect(() => {
    if (walletAddress) {
      console.log('Fetching GIF list...');
      
      getGifList();
    }
  }, [walletAddress]);

  return (
    <div className="App">
      {/* This was solely added for some styling fanciness */}
			<div className={walletAddress ? 'authed-container' : 'container'}>
        <div className="header-container">
          <p className="header">🖼 GIF Portal</p>
          <p className="sub-text">
            View your GIF collection in the metaverse ✨
          </p>
          
          {/* Add the condition to show this only if we don't have a wallet address */}
          {!walletAddress && renderNotConnectedContainer()}
          {/* We just need to add the inverse here! */}
        {walletAddress && renderConnectedContainer()}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
