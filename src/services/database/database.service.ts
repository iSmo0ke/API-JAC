import mysql, {Pool, PoolConnection} from 'mysql2/promise';

class DatabaseService{
    private pool : Pool;

    constructor(){
        this.pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database:process.env.DB_NAME,
            waitForConnections:true,
            connectionLimit:10,
            queueLimit:0,
            port: +(process.env.DB_PORT || 3306),
        });
    }
    async getConnection(): Promise<PoolConnection>{
        return await this.pool.getConnection();
    }
    async query(query: string, values?: any): Promise<any>{
        const connection = await this.getConnection();
        try{
            const [results] = await connection.query(query, values);
            return results;
        }finally{
            connection.release();
        }
    }
}