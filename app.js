const http = require('http');
const userRequestHandler = require('./l5');

const server = http.createServer(userRequestHandler);

  const PORT = 3005;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});  