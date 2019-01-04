const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('Up and running!');
});

const port = process.env.PORT;

app.listen(port, () => {
   console.log('Port ' + port + ' started');
});