import server from './server'

const App = () => {
  const app = server()
  const port = process.env.PORT || 5000

  app.set('trust proxy', true)
  app.set('port', port)

  app.listen(app.get('port'), () => {
    console.log('Listening on port', app.get('port'))
  })
}

export default App()