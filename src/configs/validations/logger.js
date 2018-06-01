import joi from 'joi'

const envVarsSchema = joi.object({
    LOGGER_LEVEL: joi.string()
      .allow(['error', 'warn', 'info', 'verbose', 'debug', 'silly'])
      .default('info'),
    LOGGER_ENABLED: joi.boolean()
      .truthy('TRUE')
      .truthy('true')
      .falsy('FALSE')
      .falsy('false')
      .default(false)
  }).unknown()
  .required()

const { error, value } = joi.validate(process.env, envVarsSchema)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
  logger: {
    level: value.LOGGER_LEVEL,
    enabled: value.LOGGER_ENABLED
  }
}

export { config }