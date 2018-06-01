import errors from '../routes/errors'

const errorConfig = (app) => {
  app.use(errors.logError)
  app.use(errors.defaultError)
}

export default errorConfig