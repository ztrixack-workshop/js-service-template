import cors from 'cors'
import express from 'express'

import config from '../configs'

const router = express.Router()

const check = (req, res) => {
  res.status(200).send('Service is fine!')
}

if (config.debug) {
  router.options('*', cors())
} else {
  router.options('/', cors())
}

router.route('/')
  .get(check)

export default router