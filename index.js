const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('Okay 123');
});

app.listen(3000, () => {
   console.log('Port 3000 started');
});