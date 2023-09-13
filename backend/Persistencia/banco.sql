CREATE TABLE clientes (
    cpf varchar(14) not null primary key,
    nome varchar(100) not null,
    email varchar(150) not null,
    telefone varchar(14) not null,
    cep varchar(8) not null,
    cidade varchar(100) not null,
    estado varchar(2) not null,
    endereço varchar(100) not null,
    curso varchar (50) not null,
    periodo varchar(30) not null,
    mensagem varchar(200),
); 