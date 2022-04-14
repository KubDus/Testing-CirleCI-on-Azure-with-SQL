import User from "../models/user";


class UserRepository {

    async getAll() {
        return await User.findAll();
    }

    async createUser(){
        await User.create({"username" : "Kuba"})
    }
}

const userRepository = new UserRepository();
export { userRepository };