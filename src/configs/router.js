import index from '../routes'
import error from '../routes/errors'

const routerConfig = (app) => {
  app.use('/', index)
  app.use('*', error.router)
}

export default routerConfig