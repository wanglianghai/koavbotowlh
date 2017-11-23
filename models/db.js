/*connect mongoose db*/
const mongoose = require('mongoose')

// mongoose的promise化
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/vboto2', {useMongoClient: true})

require('./webcontents')

