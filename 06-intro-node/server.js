import http from 'node:http';

const server = http.createServer((req, res) => {
    // endpoint GET /users
    console.log(req.method + ' ' + req.url);
    if(req.method === 'GET' && req.url === '/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]));
        return;
    } else if (req.method === 'POST' && req.url === '/users') {
        // handle POST /users
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ id: 3, name: 'Charlie' }));
        return;
    } else {
        // handle 404
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
        return;
    }
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);
console.log('Server running at http://localhost:8000/');