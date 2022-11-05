// Express setup
const router = require('express').Router();

//callback function to import /notes.js
const notesRouter = require('./notes'); 

//express function to fire callback on calls to the /api/notes endpoint
router.use('/api', notesRouter);

module.exports = router;