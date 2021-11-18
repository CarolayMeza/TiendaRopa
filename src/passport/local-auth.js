const { Strategy } = require('passport')
const passport = require('passport')
const User = require('../models/user')


const LocalStrategy = require('passport-local').Strategy

passport.serializeUser((user, done) =>{
    done(null, user.id)
})

passport.deserializeUser((id, done) =>{
    const user = user.findById(id)
    done(null, user)
})

passport.use('local-signup',new Strategy({
    usernameField: 'email',
    usernameField: 'password',
    passReqToCallback: true

}, async (req, email, password, done) => {
    const user = new User()
    user.email = email
    user.password = password 
    await user.save()
    done(null, user)
}))
