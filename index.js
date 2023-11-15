const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const data = fs.readFileSync('index.html').toString();
    res.end(data);
});

server.listen(800, () => {
    console.log(`Response recieved at port 8080`);
});




