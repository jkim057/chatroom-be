const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})
// how can I change this so that I can have the backend send only raw data back
// and the frontend hold all the designs?
module.exports = router;