const http = require("http");
// Set the hostname, can also be an address (e.g. 127.0.0.1)
const hostname = "localhost";
// Set the port, for this test we’re using 8080
const port = 8080; //999; -> permission denied 127.0.0.1:999
//Create a server object and listen on the port we set for requests
const server = http.createServer((req, res) => {
  //Set the response variables
  // HTTP status code 200 OK
  res.statusCode = 200;
  // HTTP header as plain text
  res.setHeader("Content-Type", "text/plain"); // Text to be displayed
  res.end("Hello World\n");
});

try {
  server.listen(port, hostname, () => {
    console.log("http://${hostname}:${port}/" + " ok");
  });
} catch (error) {
  console.log(error);
}
