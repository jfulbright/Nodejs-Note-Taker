// Below are my dependencies
//======================================================================
const express = require('express');
const path = require('path');
// require notes route file
const api = require('./routes/api/notes');



// This sets up the Express App
//======================================================================
const PORT = process.env.PORT || 3001;
const app = express();



// This sets up data parsing-- Express will interpret it/format data as JSON.
// Initialize express app
//==============================================================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// GET, POST, DELETE API Endpoints.
//===============================================================================
app.use('/api', api); 


//==============================================================================
// Link to my static front-end files
app.use(express.static('public'));


// On page load, render index.html and listen
//==============================================================================
// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Setting up Express Server and listening on port
//===========================================================================
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
