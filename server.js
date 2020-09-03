// init server as express
const jsonServer = require('json-server')
// init instance server as express()
const server = jsonServer.create()
// init router middleware and definition route for store data to dummy server database like real using database
const router = jsonServer.router('fake_server_db/db.json')
// init route middleware support logger and body parser
const middlewares = jsonServer.defaults()
// init server port
const PORT = process.env.PORT || 3000
// init faker js
const { faker } = require('./fakerData')

// run middleware
server.use(middlewares)
// set body parser
server.use(jsonServer.bodyParser)
// set cors http
server.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Controller-Allow-Credentials', '*')
  return next()
})

// init route faker for generate dummy data
server.get('/faker', (req, res) => {
  res.status(200).json({ ...faker })
})

// run route middleware
server.use(router)
// listening server port
server.listen(PORT, () => console.log(`JSON Server is running on ${PORT}`))
