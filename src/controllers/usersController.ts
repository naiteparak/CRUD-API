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
        } catch (error) {
            this.res = {
                res: null,
                error: ErrorMessages.SOMETHING_WENT_WRONG,
                status: HttpStatuses.INTERNAL_ERROR
            }
            return this.res
        }

    }

    async getUserById(userId) {
        try {
            const data = await userService.getUserById(userId)
            return data
        } catch (error) {
            this.res = {
                res: null,
                error: ErrorMessages.SOMETHING_WENT_WRONG,
                status: HttpStatuses.INTERNAL_ERROR
            }
            return this.res
        }

    }

    async createUser(body) {
        try {
            const data = await userService.createUser(body)
            return data
        } catch (error) {
            this.res = {
                res: null,
                error: ErrorMessages.SOMETHING_WENT_WRONG,
                status: HttpStatuses.INTERNAL_ERROR
            }
            return this.res
        }

    }

    async updateUser(body, userId) {
        try {
            const data = await userService.updateUser(body, userId)
            return data
        } catch (error){
            this.res = {
                res: null,
                error: ErrorMessages.SOMETHING_WENT_WRONG,
                status: HttpStatuses.INTERNAL_ERROR
            }
            return this.res
        }

    }

    async deleteUser(userId) {
        try {
            const data = await userService.deleteUser(userId)
            return data
        } catch (error){
            this.res = {
                res: null,
                error: ErrorMessages.SOMETHING_WENT_WRONG,
                status: HttpStatuses.INTERNAL_ERROR
            }
            return this.res
        }

    }
}

export const usersController = new UsersController()