
const fs = require('fs');

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Server</title></head>');
  res.write('<body><h1>ENTER YOUR DETAILS:</h1>');
  res.write('<form>');
  res.write('<form action="/submit-details" method="POST">');
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

    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      //const bodyobject = {};
      //for (const [key, val] of params.entries()) {
        //bodyobject[key] = val;
      //}
const bodyobject = Object.fromEntries(params.entries());
      console.log(bodyobject);
   fs.writeFile('user.txt', JSON.stringify(bodyobject));
    });
    

      if (err) console.log(err);
    res.statusCode = 302;
    res.setHeader('Location', '/');
    }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Server</title></head>');
  res.write('<body><h1>Hello, World!</h1></body>');
  res.write('</html>');
  return res.end();
  


};
  

module.exports = userRequestHandler;