const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>First Assignment of Node Js</title></head>");
    res.write(
      '<body><h1> Add a User Name</h1><form action="/add-user" method="POST"><input type="text" name="username"><button type="submit">Add User</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>First Assignment of Node Js</title></head>");
    res.write(
      "<body><ul><li>User--1</li><li>User--2</li><li>User--3</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/add-user") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]);
    });
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Response</title><head>");
    res.write("<body><h1>Welcome to Node Js Server</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(3000);
