const express = require('express');
const app = express();
const api = require('./routes/index');

const port = 5000;

app.use('/api',api);

app.listen(port, (req,res) => {
  console.log(`Express App on port ${port}!`);
});
