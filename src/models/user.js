const mongoose = require ('mongoose')
const bcrypt = require ('bcryptjs')

const { Schema } = mongoose

const userSchema = new Schema({
    email: String,
    password: String
})

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userSchema.methods.comparePassword = function(password){
    return bcrypt.compare(password, this.password)

}

module.exports = mongoose.model('users', userSchema)