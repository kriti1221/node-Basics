//get request
const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end("welcome to node!!")
// });


// post request using postman
const server = http.createServer((req, res) => {
    if (req.method == 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(body);
            res.end("data is received!!");
        });
    }
    else {
        res.end("welcome to node js!!");
    }
});


server.listen(2100);
console.log("server listening at 2100");
