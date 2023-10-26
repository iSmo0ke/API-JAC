import {RowDataPacket} from 'mysql2';
import {mysqlQuery, UsersUtilsInterface} "../../interfaces/utils/users/usersUtilsInterface"

class UsersUtils{
    
    private databaseConexion;
    private instance: UsersUtilsInterface | null;
    
    constructor(db){
        this.databaseConexion = db;
    }

    static getInstance(){
        if(this.instance){
            return this.instance;
        }
        this.instance = new UsersUtils(db);
        return this.instace
    }

    getUsers() :mysqlQuery{

        const query = "SELECT * FROM users"
        const[rows, fields] = this.databaseConexion.query<RowDataPacket[][]>(query);

        return{ rows, fields}
    }
    
    getUsersById(id: String) : mysqlQuery{
        const query = "SELECT * FROM users WHERE id= " + id;
        const[rows, fields] = this.databaseConexion.query<RowDataPacket[][]>(query);
    }
}