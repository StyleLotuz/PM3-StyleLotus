import server from "./server";
import { PORT, HOST, PROTO } from "./config/envs";

server.listen(PORT, HOST, () => {
	console.log(`Server listening on ${PROTO}://${HOST}:${PORT}`);
});
