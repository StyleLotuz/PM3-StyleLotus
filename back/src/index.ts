import server from "./server";
import { PORT, HOST, PROTO } from "./config/envs";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
.then(res =>{
	console.log("Se ha realizado una conexión con el servidor");
	console.log(HOST)
	
	server.listen(PORT, HOST, () => {
		console.log(`Server listening on ${PROTO}://${HOST}:${PORT}`);
	});
})
