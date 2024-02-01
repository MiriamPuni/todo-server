const taskController = require('./task.controller')

async function getAllTask(){
    return await taskController.read({isActive: true})
}

async function getAllTaskIncludingNotActivs(){
    return await taskController.read()
}

async function deleteOne(id){
    return await taskController.update({_id:id}, {isActive:false})
}

async function deleteAll(){
    return await taskController.update({},{isActive:false})
}

async function createTask(data){
    return await taskController.create(data)
}

async function doneOfId(id){
    return await taskController.update({_id:id}, {done:true})
}

async function notDoneOfId(id){
    return await taskController.update({_id:id}, {done:false})
}

async function doneAll(){
    return await taskController.update({isActive: true}, {done:true})
}

async function notDoneAll(){
    return await taskController.update({isActive: true}, {done:false})
}

async function deadline(id){
    let task = await taskController.read({_id:id})

    const moment = require('moment')
    let dateFinish = task[0].dateFinish
    let dateNow = Date.now()

    let result = dateNow.diff(dateFinish, 'days')
    console.log(dateNow);
    console.log(dateFinish);
    console.log(result);
    // await console.log(taskController.read({_id:id})[0].dateFinish);
    return 'ok'
}

module.exports = {deadline, doneAll, notDoneAll, notDoneOfId,createTask,getAllTask, deleteOne, deleteAll, getAllTaskIncludingNotActivs, doneOfId}
