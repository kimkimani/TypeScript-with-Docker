import { createPool } from 'mysql2/promise';


export async function connect() {
    const connection = await createPool({
        host: 'mysql_server',
        user: 'db-user',
        password: 'testpass',
        database: 'blog',
        connectionLimit: 10
        
    });


    return connection;
}


