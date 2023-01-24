require ("dotenv").config()
const ip = process.env.ip 
const port = process.env.port
const express = require ("express")
const bodyParser = require ("body-parser")
const path = require ("path")

let app = express()
app.use(express.static(path.join(__dirname, 'index.html')))
app.use(bodyParser.json({extended: true}))

app.get ('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.listen(port, ip, () => {
	console.log('http://'+ip + ':' + port)
})
