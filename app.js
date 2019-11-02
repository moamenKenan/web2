const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/kenan', function (req, res) {
  res.json({ name: 'kenan' })
});

app.listen(3000, () => console.log('App listening on port 3000!'));