const {body} = require('express-validator')

const promptValidator =  [
        body('code').not().isEmpty().withMessage('Code is required')
    ]

module.exports = promptValidator