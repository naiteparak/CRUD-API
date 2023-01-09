import {userService} from "../services/usersService";
import {responseObj} from "../interfaces/responseObj";
import {HttpStatuses} from "../responses/httpStatuses";
import {ErrorMessages} from "../responses/errorMessages";

class UsersController {

    private res: responseObj

    async getAllUsers() {
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

    async getUserById(userId) {
        try {
            const data = await userService.getUserById(userId)
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

    async createUser() {
        try {
            const data = await userService.createUser()
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
            const data = await userService.updateUser(userId)
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
            const data = await userService.deleteUser(userId)
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

export const usersController = new UsersController()