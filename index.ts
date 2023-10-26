import  express from "express";
import cors from "./src/middlewares/corsMiddlewares";
import routes from "./src/routes";

const server = express();
server.use(cors);
server.listen(9000, function() {
    //callback
    console.log('Servidor iniciado en el puerto 9000');
})