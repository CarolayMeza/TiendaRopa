const mongoose = require('mongoose')
const { mongodb, mongobd} = require('./keys')

mongoose.connect(mongobd.URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db  => console.log('Database esta conectada'))
    .catch(err => console.error(err))
