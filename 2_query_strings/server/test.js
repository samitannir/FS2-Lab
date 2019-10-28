const http = require("http");
const url = require("url");
require("date-utils");

const hostname = "localhost";
const port = 8080; // Error: listen EACCES: permission denied 127.0.0.1:80

// Create the server to work with the query string
http
  .createServer(function(req, res) {
    // Send an OK header since everything is fine here
    res.writeHead(200, { "Content-Type": "text/ html" });
    // Split the URL into parts
    var queryData = url.parse(req.url, true).query;
    console.log(queryData);
    let queryString = "";
    Object.keys(queryData).forEach(key => {
      if (queryString != "") {
        queryString += ", ";
      }
      queryString += `${key}:${queryData[key]}`;
    });
    if (queryString == "") {
      queryString = "No query";
    }
    // Get current datetime
    let now = new Date();

    // Now we have an object we can work with
    var returnValue =
      `request time: ${now.toFormat("MMM DD YYYY HH24:MI:SS")}\n` +
      `url: ${hostname}:${port}${req.url}\n` +
      `query: ${queryString}`;
    console.log(returnValue);

    // End the response and send back returnValue
    res.end(returnValue);
  })
  .listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}/` + " ok");
  });
