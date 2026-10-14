process.exit(1);
import http from 'node:http';
const version = process.env.APP_VERSION || 'v1';
http.createServer((req, res) => {
  if (req.url === '/health') { res.writeHead(200); return res.end('ok'); }
  res.end(`hello from ${version}\n`);
}).listen(3000, () => console.log('listening on 3000'));
