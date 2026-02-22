const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Server</title></head>');
  res.write('<body><h1>ENTER YOUR DETAILS:</h1>');
  res.write('<form>');
  res.write('<from action="/submit-details" method="POST">');
  res.write('<input type="text" name="name" placeholder="Enter YourName"><br>');
  res.write('<label for="male">male</label>');
  res.write('<input type="radio" name="gender" value="male"/>');
  res.write('<label for="female">female</label>');
  res.write('<input type="radio" name="gender" value="female"/>');
  res.write('<input type="submit" value="Submit"/>');
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
  
  } else if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {

    fs.writeFile('user.txt', 'praveen kumar');
    res.statusCode = 302;
    res.setHeader('Location', '/');
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Server</title></head>');
  res.write('<body><h1>Hello, World!</h1></body>');
  res.write('</html>');
  return res.end();
  


});


const PORT = 3005;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});