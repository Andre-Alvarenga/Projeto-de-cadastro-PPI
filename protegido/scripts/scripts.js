
window.onload = () =>{
        obterClientes();
}

function mostrarMensagem(mensagem,tipo){
    let divMensagem = document.getElementById('Mensagem');
    divMensagem.innerHTML = `<div class="alert alert-${tipo}" role="alert">
                                   ${mensagem}
                            </div>`;
    setTimeout(()=>{
        divMensagem.innerHTML = '';
    },5000);

}

function obterClientes(){
    fetch('https://129.146.68.51/aluno1-ppiadsead/clientes', {method:'GET'})
    .then((resposta)=>{
        if (resposta.status === 200){
            return resposta.json();
        }
        else{
            return [];
        }
    })
    .then((listaClientes)=>{
        mostrarClientes(listaClientes);
    })
    .catch((erro)=>{
        mostrarMensagem('Não foi possível obter os clientes do backend. Erro: ' + erro.message,'danger');
    })
};

function cadastrarCliente(cliente){
    fetch('https://129.146.68.51/aluno1-ppiadsead/clientes',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(cliente)
    }).then((resposta)=>{
        if (resposta.status === 200){
            return json();
        }
        else{
            return {
                status:false,
                mensagem:'Não foi possivel enviar o cliente para o backend.'
            };
        }
    }).then((respostaBackEnd)=>{
        if(respostaBackEnd.status){
            mostrarMensagem(respostaBackEnd.mensagem,'success');
        }
        else{
            mostrarMensagem(respostaBackEnd.mensagem,'danger');
        }
    }).catch((erro)=>{
        mostrarMensagem(erro.message,'danger');
    });
}


function mostrarClientes(listaClientes){
    let elementoDivTabela = document.getElementById("espacoTabela");
    elementoDivTabela.innerHTML = '';
    if (listaClientes.lenght > 0){;
        let tabela = document.createElement('table'); 
        tabela.className ='table table-striped table-hover'
        let cabecalhoTabela = document.createElement('thead');
        let corpoTabela = document.createElement('tbody');

        cabecalhoTabela.innerHTML = `<th> 
                                        <td>nome</td>
                                        <td>CPF</td>
                                        <td>email</td>
                                        <td>telefone</td>
                                        <td>cep</td>
                                        <td>cidade</td>
                                        <td>estado</td>
                                        <td>endereço</td>
                                        <td>curso</td>
                                        <td>periodo</td>
                                        <td>mensagem</td>
                                    </th>`;

       tabela.appendChild(cabecalhoTabela);

       for (const cliente of listaClientes){
        const linhatabela = document.createElement('tr');
        linhatabela.innerHTML = `<td>${cliente.nome}</td>
                                <td>${cliente.CPF}</td>
                                <td>${cliente.email}</td>
                                <td>${cliente.telefone}</td>
                                <td>${cliente.cep}</td>
                                <td>${cliente.cidade}/${cliente.estado}</td>
                                <td>${cliente.endereço}</td>
                                <td>${cliente.curso}</td>
                                <td>${cliente.periodo}</td>
                                <td>${cliente.mensagem}</td>`;
        corpoTabela.appendChild(linhatabela);

       }

       tabela.appendChild(corpoTabela);
       elementoDivTabela.appendChild(tabela);
    }
    else{
        elementoDivTabela.innerHTML = `<div class="alert alert-warning" role="alert">
                                            Nenhum cliente cadastrado
                                       </div>`;
    }
}