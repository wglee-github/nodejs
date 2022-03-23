const mongoose = require('mongoose')

// schema 정의
const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength : 5
    },
    lastnmae: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0

    }, 
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

// schema를 model로 감싸주기
const User = mongoose.model('User', userSchema)

// 다른파일에서도 사용가능 하도록 Export
module.exports('User')

