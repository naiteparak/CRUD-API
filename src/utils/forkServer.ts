import OS from "os";
import cluster from "cluster";

export const forkServer = function (port){
    const servers = []
    for (let i = 1; i <= OS.cpus().length; i++) {
        Number(++port)
        cluster.fork({PORT: port})
        servers.push(`http://localhost:${port}`)
    }
    return servers
}