const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Schedule = new Schema(
    {
        goal: {type: String, required: true},
        startDate: {type: Date, required: true},
        endDate: {type: Date, requried: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('schedules', Schedule)