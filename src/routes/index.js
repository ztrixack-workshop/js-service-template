import cors from 'cors'
import express from 'express'

import config from '../configs'
import resp from '../helpers/resp'

const router = express.Router()

const check = (req, res) => {
  res.status(200).send(resp.success(200, 'Service is fine!'))
}

if (config.debug) {
  router.options('*', cors())
} else {
  router.options('/', cors())
}

router.route('/')
  .all(check)

export default router