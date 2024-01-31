const taskServices = require('./task.services')
const express = require('express')
const router = express.Router()

router.get('/', async(req, res)=>{
    try {
        res.send(await taskServices.getAllTask())
    } catch (error) {
        console.log('🧸🧸');
        res.status('444').send('error:', error.message)
        
    }
})

router.post('/addTask', async(req, res)=>{
    try {
        res.send(await taskServices.createTask(req.body))
    } catch (error) {
        res.status('444').send('error:', error.message)
        
    }
})

router.delete('/deleteTask/:id', async(req, res)=>{
    try {
        await taskServices.deleteOne(req.params.id)
        res.send('OK')
    } catch (error) {
        res.status('444').send('error:', error.message)
    }
})

router.delete('/deleteAll', async(req, res)=>{
    try {
        await taskServices.deleteAll()
        res.send('OK')
    } catch (error) {
        res.status('444').send('error:', error.message)
    }
})

module.exports = router