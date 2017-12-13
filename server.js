const express = require('express');
const path = require('path');
const sitemap = require('express-sitemap')();

const app = express();

app.use(express.static(path.join(__dirname, 'build'), {
  extensions: ['html'],
}));

// Set to production
process.env.NODE_ENV = 'production';

// Generate XML Sitemap
sitemap.generate(app);
sitemap.XMLtoFile();

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.get('/bar', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/bar.html'));
});

app.get('/line', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/line.html'));
});

app.get('/pie', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/pie.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/about.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/build/404.html'));
});

app.listen(5000);

// Production server
// viewed at http://localhost:5000
