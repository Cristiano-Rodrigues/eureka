import app from './app.js'
import routeFolder from 'route-based-api'
import 'dotenv/config'

routeFolder('/dist/api', {
  router: app
})

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
})