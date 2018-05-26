process.env.NODE_ENV = process.env.NODE_ENV || "development"
process.env.PORT = process.env.PORT || 3000

import server from './server'

const App = () => {
  const app = server()

  app.set('trust proxy', true)

  app.set('port', (process.env.PORT))

  app.listen(app.get('port'), () => {
    console.log('Listening on port', app.get('port'))
  })
}

export default App