import {createServer} from "./server";
import {argv} from 'node:process';
import cluster from "cluster";

const args = argv.slice(2)

if (args.includes("--multi") && cluster.isPrimary){
    createServer.multi()
} else {
    createServer.start()
}

