const express = require('express');
const { getAllSchedules, deleteOneSchedule, getNewSchedule } = require('../controllers/schedulesRoutesBackendControllers');

const router = express.Router();

router.get('/', getAllSchedules);
router.get('/newschedule', getNewSchedule);
// router.post('/', postOneSchedule);
router.delete('/:id', deleteOneSchedule);

module.exports = router;