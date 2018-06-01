import dotenv from 'dotenv'
import joi from 'joi'

const result = dotenv.config()

if (result.error) {
  throw result.error
}

const common = require('./validations/common').config
const logger = require('./validations/logger').config

const env = Object.assign({},
  common,
  logger,
)

export default env