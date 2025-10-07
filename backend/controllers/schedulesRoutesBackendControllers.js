const Schedule = require('../models/Schedule');

exports.getAllSchedules = async (req, res) => {
    try {
        const menetrendek = await Schedule.find({});
        // console.log(menetrendek);
        
        res.statusCode = 200;
        return res.render('allSchedules.ejs', { menetrendek });
    }
    catch (error) {
        res.statusCode = 404;
        return res.render('404.ejs');
    }
}

exports.getNewSchedule = (req, res) => {
    try {
        res.statusCode = 200;
        return res.render('newSchedule.ejs');
    }
    catch (error) {
        res.statusCode = 404;
        return res.render('404.ejs');
    }
}

exports.deleteOneSchedule = async (req, res) => {
    try {
        const { id } = req.params;
        await Schedule.findByIdAndDelete({ _id: id });
        
        res.statusCode = 200;
        return res.json({msg: "Sikeres törlés!"});
    } catch (error) {
        res.statusCode = 404;
        return res.render('404.ejs');
    }
};