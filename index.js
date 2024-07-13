// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here
let http = require("http");
let server = http.createServer((req, res) => {
  res.end("Welcome to first server!");
});
server.listen(3100, () => {
  console.log("Server is listning on port 3100");
});

module.exports = server;
