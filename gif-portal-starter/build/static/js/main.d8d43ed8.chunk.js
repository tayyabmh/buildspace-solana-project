(this["webpackJsonpbuildspace-solana"]=this["webpackJsonpbuildspace-solana"]||[]).push([[0],{104:function(e){e.exports=JSON.parse('{"_keypair":{"publicKey":{"0":125,"1":236,"2":109,"3":91,"4":150,"5":219,"6":240,"7":209,"8":163,"9":142,"10":149,"11":43,"12":201,"13":149,"14":16,"15":80,"16":162,"17":93,"18":216,"19":136,"20":243,"21":157,"22":241,"23":180,"24":209,"25":128,"26":182,"27":222,"28":196,"29":80,"30":189,"31":38},"secretKey":{"0":127,"1":137,"2":176,"3":144,"4":253,"5":131,"6":169,"7":139,"8":126,"9":168,"10":28,"11":138,"12":231,"13":52,"14":113,"15":172,"16":232,"17":26,"18":196,"19":81,"20":84,"21":19,"22":93,"23":182,"24":40,"25":160,"26":225,"27":51,"28":167,"29":23,"30":98,"31":191,"32":125,"33":236,"34":109,"35":91,"36":150,"37":219,"38":240,"39":209,"40":163,"41":142,"42":149,"43":43,"44":201,"45":149,"46":16,"47":80,"48":162,"49":93,"50":216,"51":136,"52":243,"53":157,"54":241,"55":180,"56":209,"57":128,"58":182,"59":222,"60":196,"61":80,"62":189,"63":38}}}')},110:function(e,t,n){},111:function(e,t){},112:function(e,t){},143:function(e,t){},144:function(e,t){},167:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var r=n(22),c=n.n(r),a=n(100),s=n.n(a),i=(n(110),n(1)),o=n.n(i),u=n(3),l=n(9),f=n(30),p=n(8),b=n(49),d=n(104),m=n.p+"static/media/twitter-logo.d89d9a86.svg",g=(n(167),n(15)),j="itsTayyab",v="https://twitter.com/".concat(j),h=f.d.SystemProgram,x=Object.values(d._keypair.secretKey),y=new Uint8Array(x),w=f.d.Keypair.fromSecretKey(y),O=new p.PublicKey(b.metadata.address),k=Object(p.clusterApiUrl)("devnet"),S="processed",K=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(l.a)(a,2),i=s[0],d=s[1],x=Object(r.useState)([]),y=Object(l.a)(x,2),K=y[0],N=y[1],A=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,!(n=t.solana)){e.next=12;break}if(!n.isPhantom){e.next=10;break}return console.log("h"),e.next=7,n.connect({onlyIfTrusted:!0});case 7:r=e.sent,console.log("Public Key: ",r.publicKey.toString()),c(r.publicKey.toString());case 10:e.next=13;break;case 12:alert("nah");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=new p.Connection(k,S);return new f.b(e,window.solana,S)},G=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,!(n=t.solana)){e.next=7;break}return e.next=4,n.connect();case 4:r=e.sent,console.log("Connected with Public Key:",r.publicKey.toString()),c(r.publicKey.toString());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(e){var t=e.target.value;d(t)},L=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==i.length){e.next=3;break}return console.log("No gif link given!"),e.abrupt("return");case 3:return console.log("Gif Link: ",i),e.prev=4,t=E(),n=new f.a(b,O,t),e.next=9,n.rpc.addGif(i,{accounts:{baseAccount:w.publicKey,user:t.wallet.publicKey}});case 9:return console.log("GIF successfully sent to Program: ",i),e.next=12,F();case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error("Error in sending GIF: ",e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=E(),n=new f.a(b,O,t),console.log("Performing ping..."),e.next=6,n.rpc.startStuffOff({accounts:{baseAccount:w.publicKey,user:t.wallet.publicKey,systemProgram:h.programId},signers:[w]});case 6:return console.log("Create a new BaseAccount with address: ",w.publicKey.toString()),e.next=9,F();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error creating BaseAccount: ",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=E(),n=new f.a(b,O,t),e.next=5,n.account.baseAccount.fetch(w.publicKey);case 5:r=e.sent,console.log("Got the account",r),N(r.gifList),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error in getGifs: ",e.t0),N(null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}}),[]),Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}}),[]),Object(r.useEffect)((function(){n&&(console.log("Fetching GIF list..."),F())}),[n]),Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("div",{className:n?"authed-container":"container",children:[Object(g.jsxs)("div",{className:"header-container",children:[Object(g.jsx)("p",{className:"header",children:"\ud83d\uddbc GIF Portal"}),Object(g.jsx)("p",{className:"sub-text",children:"View your GIF collection in the metaverse \u2728"}),!n&&Object(g.jsx)("button",{className:"cta-button connect-wallet-button",onClick:G,children:"Connect to Wallet"}),n&&(null===K?Object(g.jsx)("div",{className:"connected-container",children:Object(g.jsx)("button",{className:"cta-button submit-gif-button",onClick:P,children:"Do One-Time Initilization for GIF Program Account"})}):Object(g.jsxs)("div",{className:"connected-container",children:[Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),L()},children:[Object(g.jsx)("input",{type:"text",placeholder:"Enter gif link!",value:i,onChange:I}),Object(g.jsx)("button",{type:"submit",className:"cta-button submit-gif-button",children:"Submit"})]}),Object(g.jsx)("div",{className:"gif-grid",children:K.map((function(e,t){return Object(g.jsx)("div",{className:"gif-item",children:Object(g.jsx)("img",{src:e.gifLink})},t)}))})]}))]}),Object(g.jsxs)("div",{className:"footer-container",children:[Object(g.jsx)("img",{alt:"Twitter Logo",className:"twitter-logo",src:m}),Object(g.jsx)("a",{className:"footer-text",href:v,target:"_blank",rel:"noreferrer",children:"built on @".concat(j)})]})]})})};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(K,{})}),document.getElementById("root"))},49:function(e){e.exports=JSON.parse('{"version":"0.0.0","name":"arsenalgifboard","instructions":[{"name":"startStuffOff","accounts":[{"name":"baseAccount","isMut":true,"isSigner":true},{"name":"user","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"addGif","accounts":[{"name":"baseAccount","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":true}],"args":[{"name":"gifLink","type":"string"}]}],"accounts":[{"name":"BaseAccount","type":{"kind":"struct","fields":[{"name":"totalGifs","type":"u64"},{"name":"gifList","type":{"vec":{"defined":"ItemStruct"}}}]}}],"types":[{"name":"ItemStruct","type":{"kind":"struct","fields":[{"name":"gifLink","type":"string"},{"name":"userAddress","type":"publicKey"}]}}],"metadata":{"address":"LEoQcf8y3E4YeDJJj5yVmYfADq9m9smzkzbFwbAHgcd"}}')}},[[169,1,2]]]);
//# sourceMappingURL=main.d8d43ed8.chunk.js.map