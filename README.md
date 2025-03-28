# URL Shortener

A simple URL shortening service built with Node.js and Express.

## Features

- Shorten long URLs to compact short codes
- Redirect short URLs to original destinations  
- Simple web interface for creating short URLs
- In-memory storage for quick access

## Installation

```bash
npm install
```

## Usage

Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

Visit `http://localhost:3000` to use the web interface.

## API Endpoints

### POST /shorten
Create a short URL from a long URL.

Request body:
```json
{
  "url": "https://example.com/very/long/url"
}
```

Response:
```json
{
  "originalUrl": "https://example.com/very/long/url",
  "shortCode": "abc123",
  "shortUrl": "http://localhost:3000/abc123"
}
```

### GET /:shortCode
Redirects to the original URL associated with the short code.

## License

MIT