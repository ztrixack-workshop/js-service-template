import configs from './'

import index from '../routes'

const routerConfig = (app) => {
  app.use('/', index)
}

export default routerConfig