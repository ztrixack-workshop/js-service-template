import express from 'express'

import expressConfig from './configs/express'
import routerConfig from './configs/router'
import { errorHandlers } from './handles'

const server = () => {
  const app = express()

  expressConfig(app)
  routerConfig(app)

  errorHandlers(app)

  return app
}

export default server