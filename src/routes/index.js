import cors from 'cors'
import express from 'express'

import apis from '../apis'
import configs from '../configs'

const router = express.Router()

if (configs.debug) {
  router.options('*', cors())
} else {
  router.options('/', cors())
}

router.get('/', apis.get)

export default router