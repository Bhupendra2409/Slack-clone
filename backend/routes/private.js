const express = require('express');
const router = express.Router();
const {getPrivateData} =  require('../controllers/privateController');

const {protect} = require('../middleware/authenticate')

router.get('/',protect,getPrivateData);


module.exports = router;