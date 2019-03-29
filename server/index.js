const express = require('express');
const router = require('./routes');
const CONFIG = require('./config');

const app = express();

app.use(express.json());
app.use(express.static(__dirname.concat('/../public')));
app.use('/location', router);

app.listen(CONFIG.APP.PORT, () => {
  console.log('Listening on port:', CONFIG.APP.PORT);
});