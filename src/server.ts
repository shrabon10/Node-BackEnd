import { createServer } from "http";
import type { IncomingMessage, Server, ServerResponse } from "http";
import routeHandler from "./routes/route.js";


const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    routeHandler(req,res)
  }
);

server.listen(5000, () => {
  console.log("Server Is Running Successfully!");
});