const path = require('path')
const http = require('http')
const express = require('express')
const vhost = require('vhost')
const serverReady = require('server-ready')
const conf = require('../conf')

const app = express();
const server = http.createServer(app);
server.listen(8080, '127.0.0.1');
