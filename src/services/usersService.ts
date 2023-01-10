import {users} from "../users/users";
import {responseObj} from "../interfaces/responseObj";
import {ErrorMessages} from "../responses/errorMessages";
import {HttpStatuses} from "../responses/httpStatuses";
import {User} from "../interfaces/usersInterface";
import {v4 as uuidv4, validate} from 'uuid';

class UserService {

    private res: responseObj

    async getAllUsers() {
        try {
            if (!users || users.length < 1) {
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
                status: HttpStatuses.INTERNAL_ERROR
            }
            return this.res
        }
    }

    async getUserById(userId) {
        try {
            if (!validate(userId)) {
                this.res = {
                    res: null,
                    error: ErrorMessages.ID_IS_NOT_UUID,
                    status: HttpStatuses.BAD_REQUEST
                }
                return this.res
            }
            const user = users.find((user) => user.id === userId);
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
                status: HttpStatuses.INTERNAL_ERROR
            }
            return this.res
        }

    }

    async createUser(reqBody) {
        try {
            if (!reqBody.username || !reqBody.age || !reqBody.hobbies) {
                this.res = {
                    res: null,
                    error: ErrorMessages.BAD_REQUEST,
                    status: HttpStatuses.BAD_REQUEST
                }
                return this.res
            }
            if (!Array.isArray(reqBody.hobbies)) {
                this.res = {
                    res: null,
                    error: 'Hobbies must be in array',
                    status: HttpStatuses.BAD_REQUEST
                }
                return this.res
            }
            const id = uuidv4()
            const user: User = {
                id: id,
                username: reqBody.username,
                age: reqBody.age,
                hobbies: reqBody.hobbies
            }
            users.push(user)
            this.res = {
                res: user,
                error: null,
                status: HttpStatuses.CREATED_SUCCESSFULLY
            }
            return this.res
        } catch {
            this.res = {
                res: null,
                error: ErrorMessages.SOMETHING_WENT_WRONG,
                status: HttpStatuses.INTERNAL_ERROR
            }
            return this.res
        }

    }

    async updateUser(reqBody, userId) {
        try {
            if (!validate(userId)) {
                this.res = {
                    res: null,
                    error: ErrorMessages.ID_IS_NOT_UUID,
                    status: HttpStatuses.BAD_REQUEST
                }
                return this.res
            }
            if (!reqBody.username || !reqBody.age || !reqBody.hobbies) {
                this.res = {
                    res: null,
                    error: ErrorMessages.BAD_REQUEST,
                    status: HttpStatuses.BAD_REQUEST
                }
                return this.res
            }
            const userIndex = users.findIndex((user) => user.id === userId);
            if (userIndex === -1) {
                this.res = {
                    res: null,
                    error: ErrorMessages.USER_DOESNT_EXIST,
                    status: HttpStatuses.NOT_FOUND
                }
                return this.res
            }
            users[userIndex] = {
                id: userId,
                username: reqBody.username,
                age: reqBody.age,
                hobbies: reqBody.hobbies
            }
            this.res = {
                res: users[userIndex],
                error: null,
                status: HttpStatuses.OK
            }
            return this.res

        } catch {
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
            if (!validate(userId)) {
                this.res = {
                    res: null,
                    error: ErrorMessages.ID_IS_NOT_UUID,
                    status: HttpStatuses.BAD_REQUEST
                }
                return this.res
            }
            const userIndex = users.findIndex((user) => user.id === userId);
            if (userIndex === -1) {
                this.res = {
                    res: null,
                    error: ErrorMessages.USER_DOESNT_EXIST,
                    status: HttpStatuses.NOT_FOUND
                }
                return this.res
            }
            users.splice(userIndex, 1)
            this.res = {
                res: `User with id ${userId} deleted successfully`,
                error: null,
                status: HttpStatuses.NO_CONTENT
            }
            return this.res
        } catch {
            this.res = {
                res: null,
                error: ErrorMessages.SOMETHING_WENT_WRONG,
                status: HttpStatuses.INTERNAL_ERROR
            }
            return this.res
        }

    }
}

export const userService = new UserService()