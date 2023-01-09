import { HttpStatuses } from '../responses/httpStatuses'

export interface responseObj {
    res: object
    error: string
    status: HttpStatuses
}
