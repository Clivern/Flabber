var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ status: "ok" }));
  })
  .listen(process.env.PORT || 8080);

console.log("App now running on port", process.env.PORT || 8080);
