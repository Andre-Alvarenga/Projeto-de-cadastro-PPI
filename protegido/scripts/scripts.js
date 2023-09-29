
window.onload = () =>{
        obterClientes();
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
};

function mostrarClientes(listaClientes){
    let elementoDivTabela = document.getElementById('espacoTabela');
    elementoDivTabela.innerHTML = '';
    if (listaClientes.lenght > 0){;
        let tabela = document.createElement('table');
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
                                <td>${cliente.mensagem}</td>
                                <td></td>`;
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