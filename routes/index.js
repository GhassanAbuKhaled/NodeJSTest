const express = require('express');
const { send } = require('express/lib/response');
const router = express.Router();

router.get('/',  (req, res)=> {

    res.send('aGhassan')
})



module.exports = router;