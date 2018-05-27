const errorHandlers = (app) => {
  app.use(logErrorHandler)
  app.use(managedErrorHandler)
  app.use(clientErrorHandler)
  app.use(defaultErrorHandler)
}

const logErrorHandler = (err, req, res, next) => {
  if (process.env.LOG === "TRUE") {
    console.error(err.stack || err.message || err)
  }
  next(err)
}

const managedErrorHandler = (err, req, res, next) => {
  if (err.status) {
    return res.status(err.status).json({
      status: 'error',
      error: err.message,
    })
  }

  next(err)
}

const clientErrorHandler = (err, req, res, next) => {
  if (req.xhr) {
    return res.status(400).json({
      status: 'error',
      error: 'Bad Request',
    })
  }

  next(err)
}

const defaultErrorHandler = (err, req, res, next) => {
  return res.status(500).json({
    status: 'error',
    error: err,
  })
}

export default errorHandlers