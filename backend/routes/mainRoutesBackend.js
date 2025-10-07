const express = require('express');
const { getMain } = require('../controllers/mainRoutesBackendControllers');

const router = express.Router();

router.get('/', getMain);

module.exports = router;