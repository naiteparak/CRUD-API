import * as http from 'http'
import { config } from 'dotenv'
import usersRouter  from './src/routes/usersRouter'

config()
const PORT = process.env.PORT

class CreateServer {
    async start() {
        http.createServer((req, res) => {
           usersRouter(req, res)
        }).listen(PORT, () =>
            console.log(`Server running on port ${PORT}`)
        )
    }
}

export const createServer = new CreateServer()
