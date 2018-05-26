import development from './env/development'
import production from './env/production'

const configs = () => {
  if (process.env.NODE_ENV !== 'production') {
    return development
  } else {
    return production
  }
}

export default configs()