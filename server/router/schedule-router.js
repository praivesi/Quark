const express = require('express')

const ScheduleCtrl = require('../controllers/schedule-ctrl')

const router = express.Router()

router.post('/schedule', ScheduleCtrl.createSchedule)
router.put('/schedule/:id', ScheduleCtrl.updateSchedule)
router.delete('/schedule/:id', ScheduleCtrl.deleteSchedule)
router.get('/schedule/', ScheduleCtrl.getSchedules)
router.get('/schedule/:id', ScheduleCtrl.getScheduleById)

module.exports = router