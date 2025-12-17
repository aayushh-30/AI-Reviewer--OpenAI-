const {Router} = require('express')
const promptValidator = require('../validators/prompt.validator')
const { aiControlller } = require('../controllers/ai.controllers')

const router = Router()

router.post('/get-review', promptValidator, aiControlller)


module.exports = router