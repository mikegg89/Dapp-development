 const express = require('express')
 const app = express();
 const Web3 = require('web3');
 const web3 = new Web3('http://localhost:8545');


 app.get('/', (req, res) => {
   res.sendFile(__dirname + '/public/index.html');
 })

 app.get('/ajax-request', (req, res) => {
   web3.eth.getAccounts(function(error, addresses){
     if (error == null) res.send(JSON.stringify(addresses))
  })
   //res.send(JSON.stringify(test))
 })

 // app.get('/ajax-request', (req, res) => {
 //   res.send('HEY I AM THE AJAX RESPONSE')
 // })

 app.listen(3000);

// cd Desktop/Dapp/Dapp-development
// yarn start

//const Web3 = require('web3');
//const web3 = new Web3('http://localhost:8545');

//web3.eth.getAccounts(function(err, res){
//  console.log(err, res)
//})
