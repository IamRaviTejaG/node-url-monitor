let routeModel = require('../models/model')

module.exports = {
  addUrlMonitor: (req, res) => {
    // console.log(req)
    console.log(req.body)
    routeModel.addUrlMonitor(req.body).then(data => {
      res.status(200).json({ success: true })
    }).catch(err => {
      res.status(400).json({ success: false })
    })
  },

  deleteSingleUrl: (req, res) => {
    routeModel.deleteSingleUrl(urlId).then(data => {
      res.status(200).json({ success: true })
    }).catch(err => {
      res.status(400).json({ success: false })
    })
  },

  showAllUrlStats: (req, res) => {
    routeModel.showAllUrlStats().then(data => {
      res.status(200).json(data)
    }).catch(err => {
      res.status(400).json({ error: err })
    })
  },

  showSingleUrlStats: (req, res) => {
    res.status(200).send(`You enquired stats for URL ID: ${req.params.id}`)
  },

  updateUrlInfo: (req, res) => {
    routeModel.updateUrlInfo.then(data => {
      res.status(200).json({ success: true })
    }).catch(err => {
      res.status(400).json({ success: false })
    })
  }
}