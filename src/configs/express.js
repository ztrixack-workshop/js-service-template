import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import methodOverride from 'method-override'
import morgan from 'morgan'

import configs from './'

const expressConfig = (app) => {
  if (configs.debug) {
    development(app)
  } else {
    production(app)
  }
  
  app.use(methodOverride())

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.use(compression())
}

const development = (app) => {
  app.use(morgan('dev'))
} 

const production = (app) => {
  app.use(morgan('common'))
} 

export default expressConfig