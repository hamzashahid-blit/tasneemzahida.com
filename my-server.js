import { handler } from './build/handler.js';
import express from 'express';
import http from 'http';
import https from 'https';
import fs from 'fs';

const app = express();

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/tasneemzahida.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/tasneemzahida.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/tasneemzahida.com/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

//// add a route that lives separately from the SvelteKit app
//app.get('/healthcheck', (req, res) => {
//	res.end('ok');
//});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});

//app.listen(80, () => {
//	console.log('listening on port 80');
//});
