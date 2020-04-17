const express = require('express')

let app = express()

app.get('/', (req, res) => {
	res.send('Hi, there.')
})

app.listen(3333, () => {
	console.log('on on 3333')
})