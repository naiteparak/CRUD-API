import * as http from 'http'
import { config } from 'dotenv'
import userRouter  from './src/routes/userRoutes'

config()
const PORT = process.env.PORT

class CreateServer {
    start() {
        http.createServer((req, res) => {
           userRouter(req)
        }).listen(PORT, () =>
            console.log(`Server running on port ${PORT}`)
        )
    }
}

export const createServer = new CreateServer()
