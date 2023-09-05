import { Router } from "express";

const rotaLogin = Router();

rotaLogin
.get("/", (requisicao, resposta) => {
    resposta.redirect("/aluno1-ppiadsead/login");
})

.post("/", (requisicao, resposta) =>{
    const usuario = requisicao.body.usuario; 
    const senha = requisicao.body.senha;
    if (usuario === 'Renato' && senha === '123'){
        requisicao.session.usuarioLogado = true;
        resposta.redirect("/aluno1-ppiadsead/cadastroCliente.html");   
    }
    else {
        resposta.send(" \
                        <p>Falha no login</p> \
                        <button onclick='history.back()'> \
                            Tentar novamente \
                        </button>\
        ");
    }
});


export default rotaLogin;