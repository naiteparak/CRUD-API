import { HttpStatuses } from '../responses/httpStatuses'

export interface responseObj {
    res: object | string
    error: string
    status: HttpStatuses
}
