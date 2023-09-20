import express from 'express';
import autenticar from './seguranca/autenticacao.js';
import session from 'express-session';
import rotaLogin from './rotas/rotaLogin.js';
import Cliente from './backend/Modelo/Cliente.js';

const host = '0.0.0.0';
const porta = '3201';

const app = express();

app.use(session({
    secret:'Minh4ChAveS3crEt4',
    resave: true,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 30 //30 Minutos
    }
})); 

app.use(express.urlencoded({extended: false}));

app.use(express.static('./publico'));

app.use('/clientes', (requisicao, resposta)=>{
    const cliente = new Cliente();
    cliente.consultar('').then((listaClientes)=>{
        resposta.json(listaClientes);
    })
})

app.use('/login', rotaLogin);

app.use(autenticar,  express.static('./protegido'));

app.listen(porta, host,() => {
    console.log("Servidor escutando em ", host, porta)
});
