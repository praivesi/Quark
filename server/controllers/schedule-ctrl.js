const Schedule = require('../models/schedule-model')

createSchedule = async (req, res) => {
    const body = req.body
    
    if(!body)
    {
        return res.status(400).json({
            success: false,
            error: 'You must provide a schedule'
        })
    }

    const schedule = Schedule(body)

    if(!schedule) {
        return res.status(400).json({success: false, error: err})
    }

    schedule
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: schedule._id,
                    message: 'Schedule created!'
                })
            })
            .catch(error => {
                return res.status(400).json({
                    error,
                    message: 'Schedule not created!'
                })
            })
}

updateSchedule = async (req, res) => {
    const body = req.body;

    if(!body){
        return res.status(400).json({
            success: false,
            message: 'You must send schedule date'
        })
    }

    Schedule.findOne({_id: req.params.id}, (err, schedule) => {
        if(err){
            return res.status(400).json({
                err,
                message: 'Schedule not found!'
            })
        }

        schedule.goal = body.goal
        schedule.startDate = body.startDate
        schedule.endDate = body.endDate
        schedule
                .save()
                .then(() => {
                    return res.status(200).json({
                        success: true,
                        id: schedule._id,
                        message: 'Schedule updated!'
                    })
                })
                .catch(error => {
                    return res.status(404).json({
                        success: false,
                        message: 'Schedule not updated!'
                    })
                })
    })
}

deleteSchedule = async (req, res) => {
    await Schedule
        .findOneAndDelete({_id: req.params.id}, (err, schedule) => {
            if(err){
                return res.status(400).json({success: false, error: err})
            }

            if(!schedule){
                return res.status(404).json({success: false, message: 'Schedule not found'})
            }

            return res.status(200).json({success: true, data: 'Schedule deleted'})
        })
         .catch(err => console.log(err))
}

getScheduleById = async (req, res) => {
    await Schedule
            .find({_id: req.params.id}, (err, schedule) => {
                if(err){
                    return res.status(400).json({success: false, error: err})
                }

                if(!schedule){
                    return res.status(404).json({success: false, message: 'Schedule not found'})
                }

                return res.status(200).json({success: true, data: schedule})
            })
            .catch(err => console.log(err))
}

getSchedules = async (req, res) => {
    await Schedule
            .find({}, (err, schedules) => {
                if(err){
                    return res.status(400).json({success: false, error: err})
                }

                if(!schedules){
                    return res.status(404).json({success: false, message: 'Schedule not found'})
                }

                return res.status(200).json({success: true, data: schedules})
            })
            .catch(error => console.log(error))
}

module.exports = {
    createSchedule,
    updateSchedule,
    deleteSchedule,
    getScheduleById,
    getSchedules
}