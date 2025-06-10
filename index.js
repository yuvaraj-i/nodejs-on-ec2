// server.js

const express = require('express');
const app = express();
const port = 3000;

// Common HTML wrapper function
const renderHTML = (title, heading, message) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <style>
    body {
      margin: 0;
      padding: 2rem;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f0f2f5;
      color: #333;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .card {
      background: #fff;
      padding: 2rem;
      margin-top: 2rem;
      border-radius: 10px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.1);
      max-width: 600px;
      width: 100%;
      text-align: center;
    }
    a {
      color: #007BFF;
      text-decoration: none;
      font-weight: 500;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>${heading}</h1>
    <p>${message}</p>
    <div style="margin-top: 1.5rem;">
      <a href="/">Back to Home</a>
    </div>
  </div>
</body>
</html>
`;

// Root route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Hello World</title>
      <style>
        body {
          margin: 0;
          padding: 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f0f2f5;
          text-align: center;
        }
        h1 {
          color: #333;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin: 1rem 0;
        }
        a {
          text-decoration: none;
          font-size: 1.1rem;
          color: #007BFF;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <h1>Hello World World</h1>
      <p>Select a test endpoint:</p>
      <ul>
        <li><a href="/test1">Go to /test1</a></li>
        <li><a href="/test2">Go to /test2</a></li>
        <li><a href="/test3">Go to /test3</a></li>
      </ul>
    </body>
    </html>
  `);
});

// Styled test endpoints
app.get('/test1', (req, res) => {
  res.send(renderHTML('Test 1', 'Test Endpoint 1', 'This is the styled HTML response from /test1.'));
});

app.get('/test2', (req, res) => {
  res.send(renderHTML('Test 2', 'Test Endpoint 2', 'You have reached the /test2 endpoint with clean UI.'));
});

app.get('/test3', (req, res) => {
  res.send(renderHTML('Test 3', 'Test Endpoint 3', 'Here is some styled content from /test3.'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
