import { createServer } from "vite";

const server = await createServer({
  server: {
    host: "127.0.0.1",
    port: 8080,
  },
});

await server.listen();
server.printUrls();

setInterval(() => {}, 60_000);
