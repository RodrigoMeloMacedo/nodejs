// Requiring module (requisição do modulo express)
const express = require('express');
const mysql = require('mysql2');
const connect = require('./conexao.js');

// Creating express object (criar objeto express dentro do app)
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Handling GET request (ROTA localhost:5000 - IMPRIMIR)
app.get('/', (req, res) => {
    res.send('A api está rodando ' + 'neste servidor')
    res.end()
})
// Handling GET request (ROTA localhost:5000/retorno - IMPRIMIR)
app.get('/retorno', (req, res) => {
    res.send('Nodejs é muito fácil')
    res.end()
})

// Handling GET request (ROTA localhost:5000/clientes - SELECT NO BD)
app.get('/clientes', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from tb_cliente', res);
})

// Handling GET request (ROTA localhost:5000/clientes/1 - SELECT NO BD COM ID)
app.get('/clientes/:id_cliente', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from tb_cliente where id_cliente='+ req.params.id_cliente, res);
})

// Handling PUT request (ROTA localhost:5000/clientes/1 - UPDATE NO BD)
app.put('/clientes/:id_cliente', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("update tb_cliente set nome_cliente='"+req.body.nome_cliente+"' where id_cliente="+req.params.id_cliente, res);
})

// Handling POST request (ROTA localhost:5000/clientes - INSERT NO BD)
app.post('/clientes/', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into tb_cliente (nome_cliente) values('"+req.body.nome_cliente+"')", res);
})

// Handling DELETE request (ROTA localhost:5000/clientes - DELETE NO BD)
app.delete('/clientes/:id_cliente', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("delete from tb_cliente where id_cliente="+ req.params.id_cliente, res);
})


// Port Number
const PORT = process.env.PORT || 5000;

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
