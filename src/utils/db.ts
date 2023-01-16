import fs from "fs/promises";
import path from "path";
import {User} from "../interfaces/userInterface";

class DB {
    private filePath = path.resolve(process.cwd(), "src/users/users.json")

    async read(){
        const users: User[] = await fs
            .readFile(this.filePath, { encoding: 'utf-8' })
            .then(data => JSON.parse(data))
            .then(data => Array.from(data))
        return users
    }

    async write(user) {
        await fs.writeFile(this.filePath, JSON.stringify(user))
    }

}

export const db = new DB()