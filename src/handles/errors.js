const errorHandlers = (app) => {
    app.use(logErrorHandler)
    app.use(clientErrorHandler)
    app.use(defaultErrorHandler)
}

const logErrorHandler = (err, req, res, next) => {
    console.error(err.stack)
    next(err)
}

const clientErrorHandler = (err, req, res, next) => {
    if (req.xhr) {
        return res.status(500).json({ status: 'error', error: 'Something failed!' })
    }

    next(err)
}

const defaultErrorHandler = (err, req, res, next) => {
    return res.status(500).json({ status: 'error', error: err })
}
  
export default errorHandlers