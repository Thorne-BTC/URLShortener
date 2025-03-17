const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// In-memory storage for URLs
const urlDatabase = {};

app.get('/', (req, res) => {
    res.send('URL Shortener Service');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});