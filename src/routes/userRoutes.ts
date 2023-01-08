import * as url from 'url';
import {responseObj} from "../utils/responseObj";
import {HttpStatuses} from "../utils/httpStatuses";

const userRouter = function (req) {
    const queryObject = url.parse(req.url, true)
    const reqQuery = Object.keys(queryObject.query)[0]
    const reqUrl = queryObject.pathname
    const reqMethod = req.method
    if (reqUrl === "/api/users" && reqMethod === "GET" && reqQuery === undefined) {
        console.log(1)
    } else if (reqUrl === "/api/users" && reqMethod === "GET" && reqQuery === "userId") {
        console.log(2)
    } else if (reqUrl === "/api/users" && reqMethod === "POST" && reqQuery === undefined) {
        console.log(3)
    } else if (reqUrl === "/api/users" && reqMethod === "PUT" && reqQuery === "userId") {
        console.log(4)
    } else if (reqUrl === "/api/users" && reqMethod === "DELETE" && reqQuery === "userId") {
        console.log(5)
    } else {
        console.log(6)
    }

}

export default userRouter