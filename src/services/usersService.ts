import {users} from "../users/users";
import {responseObj} from "../interfaces/responseObj";
import {ErrorMessages} from "../responses/errorMessages";
import {HttpStatuses} from "../responses/httpStatuses";

class UserService {

    private res: responseObj

    async getAllUsers(){
        try {
            if(!users || users.length < 1){
                this.res = {
                    res: null,
                    error: ErrorMessages.USERS_NOT_FOUND,
                    status: HttpStatuses.NOT_FOUND
                }
                return this.res
            }
            this.res = {
                res: users,
                error: null,
                status: HttpStatuses.OK
            }
            return this.res
        } catch {
            this.res = {
                res: null,
                error: ErrorMessages.SOMETHING_WENT_WRONG,
                status: HttpStatuses.BAD_REQUEST
            }
            return this.res
        }
    }

    async getUserById(userId) {
        try {
            const user = users.find((user) => user.id === parseInt(userId));
            if (!user) {
                this.res = {
                    res: null,
                    error: ErrorMessages.USER_DOESNT_EXIST,
                    status: HttpStatuses.NOT_FOUND
                }
                return this.res
            }
            this.res = {
                res: user,
                error: null,
                status: HttpStatuses.OK
            }
            return this.res
        } catch {
            this.res = {
                res: null,
                error: ErrorMessages.SOMETHING_WENT_WRONG,
                status: HttpStatuses.BAD_REQUEST
            }
            return this.res
        }

    }

    async createUser() {
        try {
            const data = await userService.getAllUsers()
            return data
        } catch {
            this.res = {
                res: null,
                error: ErrorMessages.SOMETHING_WENT_WRONG,
                status: HttpStatuses.BAD_REQUEST
            }
            return this.res
        }

    }

    async updateUser(userId) {
        try {
            const data = await userService.getAllUsers()
            return data
        } catch {
            this.res = {
                res: null,
                error: ErrorMessages.SOMETHING_WENT_WRONG,
                status: HttpStatuses.BAD_REQUEST
            }
            return this.res
        }

    }

    async deleteUser(userId) {
        try {
            const data = await userService.getAllUsers()
            return data
        } catch {
            this.res = {
                res: null,
                error: ErrorMessages.SOMETHING_WENT_WRONG,
                status: HttpStatuses.BAD_REQUEST
            }
            return this.res
        }

    }
}

export const userService = new UserService()