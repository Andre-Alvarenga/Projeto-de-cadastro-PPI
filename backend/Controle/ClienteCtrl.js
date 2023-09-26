import Cliente from "../Modelo/Cliente.js";

export default class ClienteCtrl{
     
    gravar(requisicao, resposta){
        resposta.type('application/json');
        if (requisicao.method === 'POST' && requisicao.is('application/json')){
            const dados = requisicao.body;
            const cpf = dados.cpf;
            const nome = dados.nome;
            const email = dados.email;
            const telefone = dados.telefone;
            const cep = dados.cep;
            const cidade = dados.cidade;
            const estado = dados.estado;
            const endereço = dados.endereço;
            const curso = dados.curso;
            const periodo = dados.periodo;
            const mensagem = dados.mensagem;
            if (cpf && nome && email && telefone && cep && cidade && estado && endereço && curso && periodo && mensagem){
                const cliente = new Cliente(nome, cpf, email, telefone, cep, cidade, estado, endereço, curso, periodo, mensagem);
                cliente.gravar().then(()=>{
                    resposta.json({
                        status:true,
                        mensgem: "Cliente cadastrado com sucesso."
                    })
            
                }).catch((erro)=>{
                    resposta.json({
                        status:false,
                        mensagem: "Erro ao cadastrar o cliente:" + erro.message
                    })
                });
            }
            else{
                resposta.json({
                    status:false,
                    mensagem:"Informe todos os dados do cliente conforme a documetação."
                })
            }
        }
        else{
            resposta.json({
                status:false,
                mensagem:"Requesição invalida! Informe um cliente no formato JSON"
            })
        }
    }
    atualizar(requisicao, resposta){
        resposta.type('application/json');
        if (requisicao.method === 'PUT' && requisicao.is('application/json')){
            const dados = requisicao.body;
            const cpf = dados.cpf;
            const nome = dados.nome;
            const email = dados.email;
            const telefone = dados.telefone;
            const cep = dados.cep;
            const cidade = dados.cidade;
            const estado = dados.estado;
            const endereço = dados.endereço;
            const curso = dados.curso;
            const periodo = dados.periodo;
            const mensagem = dados.mensagem;
            if (cpf && nome && email && telefone && cep && cidade && estado && endereço && curso && periodo && mensagem){
                const cliente = new Cliente(nome, cpf, email, telefone, cep, cidade, estado, endereço, curso, periodo, mensagem);
                cliente.atualizar().then(()=>{
                    resposta.json({
                        status:true,
                        mensagem:"Cliente atualizado com Sucesso."
                    })
                }).catch((erro)=>{
                    resposta.json({
                        status:false,
                        mensagem:"Erro ao atualizar cliente:" + erro.message
                    })
                })
            }
            else{
                resposta.json({
                    status:false,
                    mensagem:"Informe todos os dados do cliente conforme a documetação."
                })    
            }
                  
        }
        else{
            resposta.json({
                status:false,
                mensagem:"Requesição invalida! Informe um cliente no formato JSON para ser atualizado"
            })
        }
    }
    excluir(requisicao, resposta){
        resposta.type('application/json');
        if (requisicao.method === "DELETE" && requisicao.is('application/json')){
            const dados = requisicao.body;
            const cpf = dados.cpf;
            if (cpf){
                console.log("antes do server explodir");
                const cliente = new Cliente(undefined, cpf);
                console.log("depois", cliente.toJson());
                cliente.excluir().then(()=>{
                    resposta.json({
                        status:true,
                        mensagem:"Cliente excluido com sucesso."
                    })
                })
            }
            else{
                resposta.json({
                    status:false,
                    mensagem:"informe o CPF do cliente para ser excluido. (formato JSON)"
                });
            }
        }
        else{
            resposta.json({
                status:false,
                mensagem:"Requisição invalida! informe um cliente no formato JSON"
            })
        }
    }
    consultar(requisicao, resposta){
        resposta.type('application/json');
        if (requisicao.method === 'GET'){
            let termo = requisicao.query.termo;
            if (!termo) termo = "";
            const cliente = new Cliente();
            cliente.consultar(termo).then((listaClientes)=>{
                resposta.json(listaClientes); 
            }).catch((erro)=>{
                resposta.json({
                    status:false,
                    mensagem:"Erro ao consultar cliente" + erro.mesage
                })
            })
        }
        else{
            resposta.json({
                status:false,
                mensagem:"Requisição invalida! informe um cliente no formato JSON"
            })
        }
    }
    
}
