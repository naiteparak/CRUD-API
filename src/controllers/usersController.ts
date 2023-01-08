import {userService} from "../services/usersService";

class usersController {

    async getAllUsers(req, res){
        try {
            const data = await userService.getAllUsers()
            return res.write(data)
        } catch (error) {

        }
    }
}