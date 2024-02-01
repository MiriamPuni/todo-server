const db = require('../db')
db.connect()
const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    userId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user",
        default: '12345',
        required: true
    },
    nameTask:{
        type: String,
        required: true
    },
    done:{
        type:Boolean,
        default: false
    },
    isActive:{
        type: Boolean,
        default: true
    },
    dateCreate:{
        type: Date,
        default: Date.now
    },
    dateFinish:{
        type: Date
    }
})

const taskModel = mongoose.model("task", taskSchema)
module.exports = taskModel