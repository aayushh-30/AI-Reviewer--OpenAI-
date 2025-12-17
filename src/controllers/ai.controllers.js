const { validationResult } = require('express-validator')
const {generateContentService} = require('../services/api.services')

const aiControlller = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { code } = req.body
    const response = await generateContentService(code)
    res.status(200).json({ response })
}

module.exports = { aiControlller }