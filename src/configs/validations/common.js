import joi from 'joi'

const envVarsSchema = joi.object({
    NODE_ENV: joi.string()
      .allow(['development', 'production', 'test'])
      .required(),
    PORT: joi.number()
      .required(),
  }).unknown()
  .required()

const { error, value } = joi.validate(process.env, envVarsSchema)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
  env: value.NODE_ENV,
  port: value.PORT,
  debug: value.NODE_ENV === 'development',
}

export { config }