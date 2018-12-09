let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = mongoose.Schema.Types.ObjectId

let dataSchema = {
  urlId: {
    type: ObjectId,
  },
  urlName: String,
  method: String,
  data: Object,
  headers: Object
}

module.exports = new Schema(dataSchema)