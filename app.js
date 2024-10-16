const http = require("http");
const { config } = require("dotenv");

config({
  path: "./.env",
});

const hostname = "localhost";
const port = process.env.PORT || 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Updated Hello, World!");
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
