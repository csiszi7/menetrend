const express = require('express');
const { getAllSchedules, deleteOneSchedule, getNewSchedule } = require('../controllers/schedulesRoutesBackendControllers');

const router = express.Router();

router.get('/', getAllSchedules);
router.get('/newschedule', getNewSchedule);
// router.post('/', postOneSchedule);
router.delete('/:id', deleteOneSchedule);


module.exports = router;

router.get('/', async (req, res) => {
  try {
    const menetrendek = await Schedule.find({});
    res.statusCode = 200;
    return res.render('allSchedules.ejs', { menetrendek });
  } catch (error) {
    console.error("❌ Hiba az összes menetrend lekérésekor:", error);
    res.statusCode = 404;
    return res.render('404.ejs');
  }
});

router.post('/newschedule', async (req, res) => {
  try {
    const {
      tipus,
      induloallomas,
      celallomas,
      idopontok,
      allomasok,
      kedvezmeny,
      kortabla,
      indulasideje,
      visszaideje,
      klima,
      helyjegy
    } = req.body;

    const ujMenetrend = new ScheduleModel({
      tipus,
      induloallomas,
      celallomas,
      idopontok: idopontok.split('\n').map(s => s.trim()).filter(Boolean),
      allomasok: allomasok.split('\n').map(s => s.trim()).filter(Boolean),
      kedvezmeny,
      kortabla,
      indulasideje,
      visszaideje,
      klima: klima === 'true',
      helyjegy: helyjegy === 'true'
    });

    await ujMenetrend.save();
    console.log('Új menetrend mentve:', ujMenetrend);
    res.redirect('/api/schedules');
  } catch (err) {
    console.error(err);
    res.status(500).send('Hiba történt a mentés során.');
  }
});


