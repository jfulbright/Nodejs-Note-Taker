// Import modular routers for /notes
const router = require('express').Router()

//declare var and store path to notes.js routes
const notesRouter = require('./notes'); 

// express method to include routes.js when user on /notes website path
router.use('/api', notesRouter);

module.exports = router;