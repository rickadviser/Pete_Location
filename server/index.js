const PORT = 3000;

const express = require('express');
const app = express();


app.use(express.static(__dirname + '/../public'));

app.get('/location', (req, res) => {
  console.log('Request received', req.url);
  res.send('Request received');

});

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);

})