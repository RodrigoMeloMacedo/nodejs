// Requiring module (requisição do modulo express)
const express = require('express');

// Creating express object (criar objeto express dentro do app)
const app = express();

// Handling GET request (metodo de consumo de dados)
app.get('/', (req, res) => {
    res.send('A api está rodando ' + 'neste servidor')
    res.end()
})
// Handling GET request (metodo de consumo de dados)
app.get('/retorno', (req, res) => {
    res.send('Nodejs é muito fácil')
    res.end()
})

// Port Number
const PORT = process.env.PORT ||5000;

// Server Setup
app.listen(PORT,console.log(`Server started on port ${PORT}`));
