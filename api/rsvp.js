const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Durable log path inside Azure App Service
const logPath = path.join(process.env.HOME || 'D:\\home', 'logs', 'rsvp-log.txt');

// Ensure log directory exists
fs.mkdirSync(path.dirname(logPath), { recursive: true });

app.post('/rsvp', (req, res) => {
    const entry = {
        timestamp: new Date().toISOString(),
        ...req.body,
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        userAgent: req.headers['user-agent']
    };

    const line = JSON.stringify(entry) + '\n';

    fs.appendFile(logPath, line, (err) => {
        if (err) {
            console.error('Failed to write RSVP log:', err);
            return res.status(500).send('Error logging RSVP');
        }
        res.send('RSVP logged');
    });
});

module.exports = app;
