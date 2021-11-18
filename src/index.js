const express = require('express');
const path = require('path');
const engine = require('ejs-mate')
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session')

//Initializations
const app = express()
require('./database')
require('./passport/local-auth')

//settings
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs',engine)
app.set('view engine', 'ejs')
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret:'mysecretsesion',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

//routes
app.use('/',require('./routes/'))

//static files
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})
