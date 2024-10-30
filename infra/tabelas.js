class Tabela {
    // construtor da Tabela
    init(conexao){
        this.conexao = conexao;
        this.criarLogin();
    }

    criarLogin(){
        let sql = 'CREATE TABLE IF NOT EXISTS login'+
                  '(id_login_pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,' +
                  'email VARCHAR(255) UNIQUE NOT NULL,'+
                  "senha VARCHAR(24) DEFAULT 'SENHA12345')";
        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro);
            }
            else{
                console.log('Tabela LOGIN criada com sucesso!')
            };
        });
    };
};
module.exports = new Tabela;