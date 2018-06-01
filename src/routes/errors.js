import express from 'express'

import config from '../configs'

const router = express.Router()

const notFound = (req, res) => {
  res.status(404).send({
    code: 404,
    status: 'error',
    message: 'Sorry, api not found',
  })
}

const logError = (err, req, res, next) => {
  if (config.logger.enabled) {
    console.error(err.stack || err.message || err)
  }
  next(err)
}

const manualError = (err, req, res, next) => {
  if (err.code) {  
    return res.status(err.code).json({
      code: err.code,
      status: 'error',
      message: err.message,
    })
  }

  next(err)
}

const defaultError = (err, req, res, next) => {
  return res.status(500).json({
    code: 500,
    status: 'error',
    message: err.stack || err.message || err || 'internal error',
  })
}

router.route('*')
  .all(notFound)

export default {
  router,
  logError,
  manualError,
  defaultError,
}