const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
  res.setHeader('Content-Type', 'text/plain');
  res.write('<html>');
  res.write('<head><title>My First Server</title></head>');
  res.write('<body><h1>WELCOME TO HOME</h1></body>');
  res.write('</html>');
  res.end();
  return;
  } else if (req.url === '/products') {
  res.setHeader('Content-Type', 'text/plain');
  res.write('<html>');
  res.write('<head><title>My First Server</title></head>');
  res.write('<body><h1>checkout our products</h1></body>');
  res.write('</html>');
  res.end();
  return;
  } 

  res.setHeader('Content-Type', 'text/plain');
  res.write('<html>');
  res.write('<head><title>My First Server</title></head>');
  res.write('<body><h1>Hello, World!</h1></body>');
  res.write('</html>');
  res.end();
  return;


});


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});