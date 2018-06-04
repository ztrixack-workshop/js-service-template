import express from 'express'

import config from '../configs'
import resp from '../helpers/resp'

const router = express.Router()

const notFound = (req, res) => {
  res.status(404).send(resp.clientError(404, 'Sorry, api not found'))
}

const logError = (err, req, res, next) => {
  if (config.logger.enabled) {
    console.error(err.stack || err.message || err)
  }
  next(err)
}

const manualError = (err, req, res, next) => {
  if (err && err.code) {
    return res.status(err.code).json(err)
  }

  next(err)
}

const defaultError = (err, req, res, next) => {
  return res.status(500).json(resp.serverError(500, err.stack || err.message || err || 'internal error'))
}

router.route('*')
  .all(notFound)

export default {
  router,
  logError,
  manualError,
  defaultError,
}