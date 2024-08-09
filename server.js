const express = require('express');

const app = express();

// RENDER ASSETS

app.use('/assets',express.static('assets'),);
// SEND INDEX.HTML and PRIVACY.html AS ROUTES

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/privacy', (req, res) => {
  res.sendFile(__dirname + '/privacy.html');
});

// START THE SERVER

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});