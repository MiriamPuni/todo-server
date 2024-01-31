const taskModel = require('./task.model')

async function create(data){
    return await taskModel.create(data)
}

async function read(filter){
    return await taskModel.find(filter)
}

async function update(filter, data){
    return await taskModel.updateMany(filter, data)
}

async function dalete(filter){
    return await taskModel.deleteOne(filter)
}

module.exports = {create, read, update, dalete}