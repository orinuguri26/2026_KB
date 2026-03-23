const http = require('http'); //http객체 생성
const { setTimeout } = require('timers/promises');

let count = 0;

//노드 서버 객체 생성
const server = http.createServer((reqeust, response) => {
  log(count);

  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.write('hello\n');

  setTimeout(() => {
    response.end('Node.js');
  }, 2000);
});

function log(count) {
  console.log((count += 1));
}

server.listen(8000, () => console.log('Hello Node.js'));
