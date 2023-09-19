import ClienteDAO from '../Persistencia/ClienteDAO.js';

export default class Cliente{
    #nome
    #cpf
    #email
    #telefone
    #cep
    #cidade
    #estado
    #endereço
    #curso
    #periodo
    #mensagem

    constructor (nome, cpf, email, telefone, cep, cidade, estado, endereço, curso, periodo, mensagem){
        this.#nome = nome;
        this.#cpf = cpf;
        this.#email = email;
        this.#telefone = telefone;
        this.#cep = cep;
        this.#cidade = cidade;
        this.#estado = estado;
        this.#endereço = endereço;
        this.#curso = curso;
        this.#periodo = periodo;
        this.#mensagem = mensagem;
    }

    get nome(){
        return this.#nome;
    }
    set nome(novoNome){
        this.#nome = nome;
    }
    get cpf(){
        return this.#cpf;
    }
    set cpf(novoCpf){
        this.#cpf = cpf;
    }
    get email(){
        return this.#email;
    }
    set email(novoEmail){
        this.#email = email;
    }
    get telefone(){
        return this.#telefone;
    }
    set telefone(novoTelefone){
        this.#telefone = telefone;
    }
    get cep(){
        return this.#cep;
    }
    set cep(novoCep){
        this.#cep = cep;
    }
    get cidade(){
        return this.#cidade;
    }
    set cidade(novoCidade){
        this.#cidade = cidade;
    }
    get estado(){
        return this.#estado;
    }
    set estado(novoEstado){
        this.#nome = estado;
    }
    get endereço(){
        return this.#endereço;
    }
    set endereço(novoEndereço){
        this.#endereço = endereço;
    }
    get curso(){
        return this.#curso;
    }
    set curso(novoCurso){
        this.#curso = curso;
    }
    get periodo(){
        return this.#periodo;
    }
    set periodo(novoPeriodo){
        this.#periodo = this.#periodo;
    }
    get mensagem(){
        return this.#mensagem;
    }
    set mensagem(novoMensagem){
        this.#mensagem = this.#mensagem;
    }
    

    toJson(){
        return {
            nome: this.#nome,
            cpf: this.#cpf,
            email: this.#email,
            telefone: this.#telefone,
            cep: this.#cep,
            cidade: this.#cidade,
            estado: this.#estado,
            endereço: this.#endereço,
            curso: this.#curso,
            periodo: this.#periodo,
            mensagem: this.#mensagem

        }

    }
    
    async gravar(){
        const cliDAO = new ClienteDAO();
        await cliDAO.gravar(this);
    }

    async atualizar(){
        const cliDAO = new ClienteDAO();
        await cliDAO.atualizar(this);
    }

    async excluir(){
        const cliDAO = new ClienteDAO();
        await cliDAO.excluir(this);
       
    }

    async consultar(termo){
        const cliDAO = new ClienteDAO();
        return await cliDAO.consultar(termo);
      
    }

    
}
