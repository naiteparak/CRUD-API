import * as url from 'url';
import {usersController} from "../controllers/usersController";
import {HttpStatuses} from "../responses/httpStatuses";
import {responseObj} from "../interfaces/responseObj";
import {ErrorMessages} from "../responses/errorMessages";
import {getReqData} from "../utils/getReqData";

const usersRouter = async function (req, res) {
    const queryObject = url.parse(req.url, true)
    const reqQuery = Object.keys(queryObject.query)[0]
    const userId = queryObject.query.userId
    const reqUrl = queryObject.pathname
    const reqMethod = req.method
    if (reqUrl === "/api/users" && reqMethod === "GET" && reqQuery === undefined) {
        const data = await usersController.getAllUsers()
        res.writeHead(HttpStatuses.OK, {"Content-Type": "application/json"});
        res.end(JSON.stringify(data));
    } else if (reqUrl === "/api/users" && reqMethod === "GET" && reqQuery === "userId") {
        const data = await usersController.getUserById(userId)
        res.writeHead(HttpStatuses.OK, {"Content-Type": "application/json"});
        res.end(JSON.stringify(data));
    } else if (reqUrl === "/api/users" && reqMethod === "POST" && reqQuery === undefined) {
        const data = await usersController.createUser(await getReqData(req, res))
        res.writeHead(HttpStatuses.CREATED_SUCCESSFULLY, {"Content-Type": "application/json"});
        res.end(JSON.stringify(data));
    } else if (reqUrl === "/api/users" && reqMethod === "PUT" && reqQuery === "userId") {
        const data = await usersController.updateUser(await getReqData(req, res), userId)
        res.writeHead(HttpStatuses.OK, {"Content-Type": "application/json"});
        res.end(JSON.stringify(data));
    } else if (reqUrl === "/api/users" && reqMethod === "DELETE" && reqQuery === "userId") {
        const data = await usersController.deleteUser(userId)
        res.writeHead(HttpStatuses.NO_CONTENT, {"Content-Type": "application/json"});
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(HttpStatuses.NOT_FOUND, {"Content-Type": "application/json"});
        const err: responseObj = {
            res: null,
            error: ErrorMessages.REQUESTED_RESOURCE_WAS_NOT_FOUND,
            status: HttpStatuses.NOT_FOUND
        }
        res.end(JSON.stringify(err));
    }

}

export default usersRouter