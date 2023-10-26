import { Application } from "express";
import Routes from "../utils/constants/rotes.json";
import UserNetwork from "../network/users";


function routes(server: Application){

    server.use(Routes.user, UserNetwork)

}

export default routes