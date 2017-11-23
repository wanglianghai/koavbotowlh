//table
const mongoose = require('mongoose'),
    Schema = mongoose.Schema

const WebcontentsSchema = new Schema({
    type:       { type: String },
    bTitle:     { type: String },
    sTitle:     { type: String },
    content:    { type: String },
    urlText:    { type: String },
    url:        { type: String },
    imagesrc:   { type: String }
})

const MyModel = mongoose.model('webcontents', WebcontentsSchema)
