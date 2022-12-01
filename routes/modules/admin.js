const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')

// route
router.get('/restaurants/create', adminController.createRestaurant)
router.get('/restaurants', adminController.getRestaurants)
router.post('/restaurants', adminController.postRestaurant)
router.use('/', (req, res) => res.redirect('/admin/restaurants'))


// export
module.exports = router
