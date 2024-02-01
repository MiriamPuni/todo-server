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

router.get('/allTask', async(req, res)=>{
    try {
        res.send(await taskServices.getAllTaskIncludingNotActivs())
    } catch (error) {
        console.log('🧸🧸');
        res.status('444').send('error:', error.message)
        
    }
})

router.post('/', async(req, res)=>{
    try {
        res.send(await taskServices.createTask(req.body))
    } catch (error) {
        res.status('444').send('error:', error.message)
        
    }
})

router.delete('/:id', async(req, res)=>{
    try {
        await taskServices.deleteOne(req.params.id)
        res.send('OK')
    } catch (error) {
        res.status('444').send('error:', error.message)
    }
})

router.delete('/', async(req, res)=>{
    try {
        await taskServices.deleteAll()
        res.send('OK')
    } catch (error) {
        res.status('444').send('error:', error.message)
    }
})

router.put('/done/:id', async(req, res)=>{
    try {
        await taskServices.doneOfId(req.params.id)
        res.send('OK')
    } catch (error) {
        res.status('444').send('error:', error.message)
    }
})

router.put('/notDone/:id', async(req, res)=>{
    try {
        await taskServices.notDoneOfId(req.params.id)
        res.send('OK')
    } catch (error) {
        res.status('444').send('error:', error.message)
    }
})

router.put('/doneAll', async(req, res)=>{
    try {
        await taskServices.doneAll()
        res.send('OK')
    } catch (error) {
        res.status('444').send('error:', error.message)
    }
})

router.put('/notDoneAll', async(req, res)=>{
    try {
        await taskServices.notDoneAll()
        res.send('OK')
    } catch (error) {
        res.status('444').send('error:', error.message)
    }
})

router.get('/deadline/:id', async(req, res)=>{
    try {
        res.send(await taskServices.deadline(req.params.id))
    } catch (error) {
        res.status('444').send('error:', error.message)
    }
})



module.exports = router