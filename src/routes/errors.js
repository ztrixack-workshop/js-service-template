import config from '../configs'

const logError = (err, req, res, next) => {
  if (config.logger.enabled) {
    console.error(err.stack || err.message || err)
  }
  next(err)
}

const defaultError = (err, req, res, next) => {
  return res.status(500).json({
    status: 'error',
    error: err,
  })
}

export default {
  logError,
  defaultError,
}