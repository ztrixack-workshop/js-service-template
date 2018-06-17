import express from 'express'

import config from './configs'
import expressConfig from './configs/express'
import routerConfig from './configs/router'
import errorConfig from './configs/error'

const app = express()

expressConfig(app)
routerConfig(app)
errorConfig(app)

app.set('trust proxy', true)
app.set('port', config.port)

app.listen(app.get('port'), () => {
  console.log('Listening on port', app.get('port'))
})

export default app