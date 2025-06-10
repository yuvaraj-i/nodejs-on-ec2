const express = require('express');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');
app.use(expressLayouts);

// Set default layout file
app.set('layout', 'layout'); // <-- Important

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Hello World' });
});

app.get('/test1', (req, res) => {
  res.render('test1', { title: 'Test 1' });
});

app.get('/test2', (req, res) => {
  res.render('test2', { title: 'Test 2' });
});

app.get('/test3', (req, res) => {
  res.render('test3', { title: 'Test 3' });
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
