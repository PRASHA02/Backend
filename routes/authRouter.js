const express = require('express')

const router = express.Router()

const {EmailPass,EmailPass2,EmailPass3} = require('../controllers/auth')
//Post method to insert email and password
router.route('/auth').post(EmailPass)

//read method

router.route('/auth').get(EmailPass2)

//update method

router.route('/auth/:id').patch(EmailPass3)

module.exports = router