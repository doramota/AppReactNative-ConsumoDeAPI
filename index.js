const express = require('express');
const server = express();
const filmes = require ('./src/filmes.json')

server.get('/Filmes', (req,resp) =>{
return resp.json(filmes)
});

server.listen(3000,() => {
    console.log('Servido está funcionando') 
});