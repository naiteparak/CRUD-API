import {userService} from "../src/services/usersService";
import {HttpStatuses} from "../src/responses/httpStatuses";

jest.mock('uuid', () => ({
    v4: () => 'uuid',
    validate: () => true
}));

describe("Users endpoints:", () => {
    it('GET: Should return empty array', async () => {
        const result = {"res": [], "error": null, "status": HttpStatuses.OK}
        expect(await userService.getAllUsers()).toStrictEqual(result)
    });

    it("POST: Should return the newly created user", async () => {
        const request = {username: "John", age: 18, hobbies: ["Hiking"]}
        const result = {
            "res":
                {"id": "uuid", "username": "John", "age": 18, "hobbies": ["Hiking"]},
            "error": null, "status": HttpStatuses.CREATED_SUCCESSFULLY
        }
        expect(await userService.createUser(request)).toEqual(result)
    });

    it('GET/id: Should get user by id ', async () => {
        const result = {
            "res":
                {"id": "uuid", "username": "John", "age": 18, "hobbies": ["Hiking"]},
            "error": null, "status": HttpStatuses.OK
        }
        expect(await userService.getUserById("uuid")).toEqual(result)
    });

    it('PUT: Should return updated user', async () => {
        const result = {
            "res":
                {"id": "uuid", "username": "Updated", "age": 20, "hobbies": ["Reading"]},
            "error": null, "status": HttpStatuses.OK
        }
        const request = {"username": "Updated", "age": 20, "hobbies": ["Reading"]}
        expect(await userService.updateUser(request, "uuid")).toEqual(result)
    });

    it('DELETE: Should return delete confirmation', async () => {
        const result = {
            res: `User with id uuid deleted successfully`,
            error: null,
            status: HttpStatuses.OK
        }
        expect(await userService.deleteUser("uuid")).toEqual(result)
    });

    it('GET/id: Should return', async () => {
        const result = {
            res: null,
            error: "User with this id doesn't exist.",
            status: HttpStatuses.NOT_FOUND
        }
        expect(await userService.getUserById("uuid")).toEqual(result)
    });
})