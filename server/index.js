const path = require('path')
const envPath = path.join(__dirname, '.env')
const dotenv = require('dotenv')
dotenv.config({ path: envPath })

const server = require('./server')

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', PORT)
})
