import {Router} from "express";
import ClienteCtrl from "../Controle/ClienteCtrl.js";

const rotaCliente = Router();

const cliCTRL = new ClienteCtrl();
rotaCliente.get('/:termo', cliCTRL.consultar)
.get('/',cliCTRL.consultar)
.post('/', cliCTRL.gravar)
.put('/', cliCTRL.atualizar)
.delete('/', cliCTRL.excluir);

export default rotaCliente;
