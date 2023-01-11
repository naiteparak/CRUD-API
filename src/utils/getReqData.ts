import {ErrorMessages} from "../responses/errorMessages";
import {responseObj} from "../interfaces/responseObj";
import {HttpStatuses} from "../responses/httpStatuses";

export const getReqData = function (req) {
    return new Promise((resolve, reject) => {
        try {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            req.on("end", () => {
                resolve(JSON.parse(body));
            });
        } catch (error) {
            const res: responseObj = {
                res: null,
                error: ErrorMessages.SOMETHING_WENT_WRONG,
                status: HttpStatuses.INTERNAL_ERROR
            }
            return res
        }
    });
}