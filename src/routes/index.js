//This is 

const express = require('express')
const passport = require('passport')
const router = express.Router()

router.get('/', (req, res, next) =>{
    res.render('index')
})

router.get('/signup', (req, res, next) =>{
    res.render('signup')
})

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
}))

router.get('/signin', (req, res, next) =>{
    
})

router.post('/signin', (req, res, next) =>{
    
})

router.get('/profile', (req, res, next) =>{
    res.render('profile')
})

module.exports = router

