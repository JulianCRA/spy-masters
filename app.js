const express = require('express')

const PORT = process.env.PORT

let app = express()

app.get('/', (req, res) => {
	res.send('Hi, there. `Sup?')
})

app.listen(PORT, () => {
	console.log(`on on ${PORT}`)
})