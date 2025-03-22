const express = require('express');
const path = require('path');
const shortid = require('shortid');

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

// Create short URL
app.post('/shorten', (req, res) => {
    const { url } = req.body;
    
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }
    
    // Basic URL validation
    try {
        new URL(url);
    } catch (e) {
        return res.status(400).json({ error: 'Invalid URL' });
    }
    
    const shortCode = shortid.generate();
    urlDatabase[shortCode] = url;
    
    res.json({
        originalUrl: url,
        shortCode: shortCode,
        shortUrl: `${req.protocol}://${req.get('host')}/${shortCode}`
    });
});

// Redirect short URL
app.get('/:shortCode', (req, res) => {
    const { shortCode } = req.params;
    const originalUrl = urlDatabase[shortCode];
    
    if (!originalUrl) {
        return res.status(404).send('URL not found');
    }
    
    res.redirect(originalUrl);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});