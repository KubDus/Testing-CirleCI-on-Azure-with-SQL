import { userRepository } from "../repositories/userRepository";

class UserController {

    async browse(req, res) {
        res.status(400).send("browsing new update 02052022");        
    };

    async getUsers(req, res) {
        res.status(400).send(await userRepository.getAll());        
    };

    
    async createUser(req, res) {
        userRepository.createUser();
        res.status(400).send("User created");        
    };

}

const userController = new UserController();
export { userController };