import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
})

export const insertSchedule = payload => api.post(`/schedule`, payload)
export const getAllSchedules = () => api.get(`/schedules`)
export const updateScheduleById = (id, payload) => api.put(`/schedule/${id}`, payload)
export const deleteScheduleById = id => api.delete(`/schedule/${id}`)
export const getScheduleById = id => api.get(`/schedule/${id}`)

const apis = {
    insertSchedule,
    getAllSchedules,
    updateScheduleById,
    deleteScheduleById,
    getScheduleById
}

export default apis

