import Cliente from "../Modelo/Cliente.js"
import conectar from "./Coenexao.js"

export default class ClienteDAO{

    async gravar(cliente){
        if (cliente instanceof Cliente){
            const conexao = await conectar();
            const sql = 'INSERT INTO clientes (nome, cpf, email, telefone, cep, cidade, estado, endereço, curso, periodo, mensagem)  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

           const parametros = [cliente.nome, cliente.cpf, cliente.email, cliente.telefone, cliente.cep, cliente.cidade, cliente.estado, cliente.endereço, cliente.curso, cliente.periodo, cliente.mensagem];

           await conexao.execute(sql, parametros);
           global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(cliente){
        if (cliente instanceof Cliente){
            const conexao = await conectar();
            const sql = 'UPDATE clientes SET nome = ?, email = ?, telefone = ?, cep = ?, cidade = ?, estado = ?, endereço = ?, curso = ?, periodo = ?,mensagem = ? WHERE cpf = ?' ;

            const parametros = [cliente.nome, cliente.email, cliente.telefone, cliente.cep, cliente.cidade, cliente.estado, cliente.endereço, cliente.curso, cliente.periodo, cliente.mensagem, cliente.cpf];

            await conexao.execute(sql,parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(cliente){
        if (cliente instanceof Cliente){
            const conexao = await conectar();
            const sql = 'DELETE FROM clientes WHERE cpf = ?';
            const parametros = [cliente.cpf];
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(termo){
        const conexao = await conectar();
        if (!termo) termo = "";
        

        const listaClientes = [];
        const sql = 'SELECT * FROM clientes WHERE nome LIKE ?';
        const parametros = ['%' + termo + '%'];
        const [rows] = await conexao.query(sql, parametros);
        for (const linha of rows){
            const cliente = new Cliente (linha.nome, linha.cpf, linha.email, linha.telefone, linha.cep, linha.cidade, linha.estado, linha.endereço, linha.curso, linha.periodo, linha.mensagem);
            listaClientes.push(cliente.toJson());
        }


        return listaClientes


    }
    


}