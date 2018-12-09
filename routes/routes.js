let router = require('express').Router()
let routeController = require('../controllers/controller')

router.route('/')
  .get(routeController.showAllUrlStats)
  .post(routeController.addUrlMonitor)

router.route('/:id')
  .delete(routeController.deleteSingleUrl)
  .get(routeController.showSingleUrlStats)
  .put(routeController.updateUrlInfo)

module.exports = router