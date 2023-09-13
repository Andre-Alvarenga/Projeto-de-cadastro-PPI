import mysql from 'mysql2/promise';

export default function conectar(){


    if (global.poolConexoes){
        return global.poolConexoes.getConnection();
    }

    global.poolConexoes = mysql.createPool({
        host: 'localhost',
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

    return global.poolConexoes.getConnection();
    
}