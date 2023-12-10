const express = require('express');
const path = require('path');
const open = require('open');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);

open('http://localhost:9000');
