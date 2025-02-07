const express = require('express');
// importando a biblioteca dotenv
const dotenv = require('dotenv');
// carregando as variaveis de ambiente
dotenv.config();
// criando a porta
const port = process.env.PORTA;
//instanciando o objeto
const app = express();

// meio termo = middleware
app.use(express.json());

const banco_dados = [];


// routes - listar produtos
app.get('/produtos', (req, res) => {
  res.json(banco_dados);
});
  
// routes - cadastrar produtos
app.post('/produtos', (req, res) => {
    // passando na requisicao o id, nome e preco
    const { id, nome, preco } = req.body;
    // adicionando à variavel novoProduto os dados que enviei no body(corpo)
    const novoProduto = {id, nome, preco};
    // adicionando ao array
    banco_dados.push(novoProduto);
    // adicionando uma resposta de sucesso se o recurso ou o produto for criado
    res.status(201).json({mensagem: "Produto criado com sucesso"});
});

// send envia texto puro
// app.get('/professor', (req, res) => {
//     res.send('Essa rota é de professor')
//   });

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
})