const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema(
   
    {
        type: String,
        required: true,
    },
    
    {
        type: String,
        timestamps: true
    }

)

const ScheduleModel = mongoose.model('schedule', scheduleSchema);

module.exports = ScheduleModel;