import dotenv from 'dotenv'

import development from './env/development'
import production from './env/production'

const configs = () => {
  dotenv.config()

  if (process.env.NODE_ENV !== 'production') {
    return development
  } else {
    return production
  }
}

export default configs()