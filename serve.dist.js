const express = require('express');
const compression = require('compression');
const app = express();
const path = require('path');
app.use(compression());
app.use(express.static(path.join(__dirname, 'dist/ssc'), { maxAge: 1 * 365 * 24 * 60 * 60 * 1000 }));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/ssc/index.html'));
});

const port = 4202;

app.listen(port, () => {
    console.log('Listening on port', port);
});