const taskController = require('./task.controller')

async function getAllTask(){
    return await taskController.read()
}

async function deleteOne(id){
    return await taskController.update({_id:id}, {isActive:false})
}

async function deleteAll(){
    return await taskController.update({},{isActive:true})
}

async function createTask(data){
    return await taskController.create(data)
}

module.exports = {createTask,getAllTask, deleteOne, deleteAll}
