const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

app.prepare().then(() => {
    // Express.js routes and middleware go here

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});

server.get('/api/custom-route', (req, res) => {
    res.json({ message: 'This is a custom API route.' });
});

const path = require('path');
server.use('/static', express.static(path.join(__dirname, 'static')));
server.get('*', (req, res) => {
    return handle(req, res);
});

server.get('/p/:id', (req, res) => {
    const actualPage = '/post';
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams);
});

server.use(express.json()); // Built-in middleware for JSON parsing

server.use('/api', customApiMiddleware); // Custom middleware for API routes

function customApiMiddleware(req, res, next) {
    // Custom logic here
    next();
}