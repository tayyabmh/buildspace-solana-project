const anchor = require('@project-serum/anchor');
const { SystemProgram } = require('@solana/web3.js');

const main = async() => {
  console.log("Start test now...")

  // Create and set provider
  const provider = anchor.Provider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Arsenalgifboard;

  // Create an account key pair for our program to use.
  const baseAccount = anchor.web3.Keypair.generate();

  // Call start_stuff_off, pass it the parameters it needs
  let tx = await program.rpc.startStuffOff({
    accounts: {
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId
    },
    signers: [baseAccount],
  });

  console.log("The Transactions Signature: ", tx);
  
  // Fetch data from the account
  let account = await program.account.baseAccount.fetch(baseAccount.publicKey);
  console.log('Arsenal board GIF Count: ', account.totalGifs.toString());

  // Calling add_gif
  await program.rpc.addGif("https://media.giphy.com/media/jSWbVIisJvmUVwiGsU/giphy.gif", {
    accounts: {
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey
    }
  })

  // Get the account again to see what changed.
  account = await program.account.baseAccount.fetch(baseAccount.publicKey);
  console.log('Arsenal board GIF Count: ', account.totalGifs.toString());

  console.log('GIF LIST: ', account.gifList)
}

const runMain = async() => {
  try {
    await main();
    process.exit(0);
  } catch(error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();