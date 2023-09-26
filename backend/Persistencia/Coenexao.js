import mysql from 'mysql2/promise';

export default async function conectar(){


    if (global.poolConexoes){
        return await global.poolConexoes.getConnection();
    }

    global.poolConexoes = mysql.createPool({
        host: '129.146.68.51',
        port: 3306,
        database: 'backendaluno1-ppiadsead', 
        user: 'aluno1-ppiadsead',
        password:'WCFWNHlOw9aQlz3TtMvu',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        idleTimeout: 60000,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0
        
    });

    return await global.poolConexoes.getConnection();
    
}