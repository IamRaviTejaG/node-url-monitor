let dbconnect = require('../config/db')
let dataSchema = require('../config/schema')
let data = dbconnect.model('url', dataSchema)

module.exports = {
  addUrlMonitor: (values) => {
    let query = new data(values)
    return query.save()
  },

  deleteSingleUrl: (urlId) => {
    let query = data.find
  },

  showAllUrlStats: () => {
    let query = data.find()
    return query.exec()
  },

  showSingleUrlStats: () => {
  },

  updateUrlInfo: () => {
  }
}