const express = require('express');
const path = require('path');
const rsvpApi = require('./api/rsvp');

const app = express();

// Serve your static wedding site
app.use(express.static(path.join(__dirname, 'wwwroot')));

// Mount RSVP API
app.use('/api', rsvpApi);

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Wedding site running on port ${port}`);
});
