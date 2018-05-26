import cors from 'cors'
import express from 'express'

import configs from '../configs'

const router = express.Router()

if (configs.debug) {
  router.options('*', cors())
} else {
  router.options('/', cors())
}

router.get('/', (req, res) => {
  res.status(200).send('Service is fine!')
})

export default router