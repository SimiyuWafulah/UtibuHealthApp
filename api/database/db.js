// db/database.js
import sql from 'mssql';

const config = {
    server: 'server-address',
    database: 'database-name',
    user: 'username',
    password: 'password',
    options: {
        encrypt: true   
    }
};

export async function connectToDatabase() {
    try {
        await sql.connect(config);
        console.log('Connected to SQL Server');
    } catch (error) {
        console.error('Error connecting to SQL Server:', error);
    }
}
