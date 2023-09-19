import Cliente from "../Modelo/Cliente.js" //dar uma olhada aqui dps
import conectar from "./Coenexao.js"

export default class ClienteDAO{

    async gravar(cliente){
        if (cliente instanceof Cliente){
            const conexao = await conectar();
            const sql = 'INSERT INTO cliente (nome, cpf, email, telefone, cep, cidade, estado, endereço, curso, periodo, mensagem) \ VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,)';

           const parametros = [cliente.nome, cliente.cpf, cliente.email, cliente.telefone, cliente.cep, cliente.cidade, cliente.estado, cliente.endereço, cliente.curso, cliente.periodo, cliente.mensagem];

           await conexao.execute(sql, parametros);
           global.poolConexoes.relaseConnection(conexao);
        }
    }

    async atualizar(cliente){
        if (cliente instanceof Cliente){
            const conexao = await conectar();
            const sql = 'UPDATE cliente SET nome = ?, email = ?, telefone = ?, cep = ?, cidade = ?, estado = ?, endereço = ?, curso = ?, periodo= ?,mensagem = ? WHERE cpf = ?' ;

            const parametros = [cliente.nome, cliente.email, cliente.telefone, cliente.cep, cliente.cidade, cliente.estado, cliente.endereço, cliente.curso, cliente.curso, cliente.periodo, cliente.mensagem, cliente.cpf];

            await conexao.execute(sql,parametros);
            global.poolConexoes.relaseConnection(conexao);
        }
    }

    async excluir(cliente){
        if (cliente instanceof Cliente){
            const conexao = await conectar();
            const sql = 'DELETE FROM cliente WHERE cpf = ?';
            const parametros = [cliente.cpf];
            await conexao.execute(sql, parametros);
            global.poolConexoes.relaseConnection(conexao);
        }
    }

    async consultar(termo){
        const conexao = await conectar();
        if (!termo) termo = "";
        

        const listaClientes = [];
        const sql = 'SELECT * FROM clientes WHERE nome LIKE ?';
        const parametros = ['%' + termo + '%'];
        const [rows] = await conexao.querry(sql, parametros);
        for (const lista of rows){
            const cliente = new Cliente (linha.cpf, linha.nome, linha.email, linha.cep, linha.cidade, linha.estado, linha.endereço, linha.curso, linha.periodo, linha.mensagem);
            listaClientes,push(cliente);
        }


        return listaClientes


    }
    


}