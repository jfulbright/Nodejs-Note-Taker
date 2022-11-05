// Express setup
const router = require('express').Router();

//callback function to import /notes.js
const notesRouter = require('./notes.js'); 

//express function to fire callback function
router.use(notesRouter);

module.exports = router;