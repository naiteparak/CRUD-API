import * as http from 'http'
import {config} from 'dotenv'
import usersRouter from './src/routes/usersRouter'
import {forkServer} from './src/utils/forkServer'
import {getReqData} from "./src/utils/getReqData";

config()
const PORT = process.env.PORT

class CreateServer {
    async start() {
        http.createServer((req, res) => {
            usersRouter(req, res)
        }).listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    }

    async multi() {
        const servers = forkServer(PORT)
        let current = 0
        http.createServer(async (req, res) => {
            if(current === servers.length - 1){
                current = 0
            } else current ++
            const { method, url } = req
            const body = await getReqData(req, res)
            const response = await fetch(`${servers[current]}${url}`, {
                method,
                body: body ? JSON.stringify(body) : null,
            }).then(response => response.json())
            res.writeHead(response.status, {
                'Content-Type': 'application/json',
            })
            res.write(JSON.stringify(response))
            res.end()
        }).listen(PORT, () => {
            console.log(`Load balancer starts on http://localhost:${PORT}`)
        })
    }
}

export const createServer = new CreateServer()
