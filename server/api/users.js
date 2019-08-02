const router = require('express').Router()
const axios = require('axios')

router.get('/', async (req, res, next) => {
  try {
    let result = await axios.get(process.env.cmcApi)
    res.send(result.data)
  } catch (err) {
    next(err)
  }
})

module.exports = router
