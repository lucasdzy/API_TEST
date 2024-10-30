// npm i express consign body-parser mysql express-from-data
const customExpress = require('./config/customExpress');
const conexao = require('./infra/connection');
const Tabela = require('./infra/tabelas');
const app = customExpress();

conexao.connect(erro =>{
    if(erro){
        console.log(erro);
    }
    else{
        Tabela.init(conexao);
        console.log("Conectado com sucesso!");
        app.listen(3000,() => console.log('Servidor rodando na porta 3000!'));
    }
})