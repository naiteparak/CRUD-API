import {HttpStatuses} from "../responses/httpStatuses";
import {responseObj} from "../interfaces/responseObj";
import {ErrorMessages} from "../responses/errorMessages";

export const getReqData = function (req, res) {
    return new Promise((resolve) => {
        try {
            let body = "";
            req
                .on("data", (chunk) => {
                    body += chunk.toString();
                })
                .on("end", () => {
                    try {
                        resolve(JSON.parse(body));
                    } catch (error) {
                        res.writeHead(HttpStatuses.BAD_REQUEST, {"Content-Type": "application/json"});
                        const err: responseObj = {
                            res: null,
                            error: ErrorMessages.BAD_REQUEST,
                            status: HttpStatuses.BAD_REQUEST
                        }
                        res.end(JSON.stringify(err));
                    }
                })
        } catch (error) {
            res.writeHead(HttpStatuses.BAD_REQUEST, {"Content-Type": "application/json"});
            const err: responseObj = {
                res: null,
                error: ErrorMessages.BAD_REQUEST,
                status: HttpStatuses.BAD_REQUEST
            }
            res.end(JSON.stringify(err));
        }
    });
}