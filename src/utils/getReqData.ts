import {ErrorMessages} from "../responses/errorMessages";

export const getReqData = function(req){
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
            reject(ErrorMessages.SOMETHING_WENT_WRONG);
        }
    });
}