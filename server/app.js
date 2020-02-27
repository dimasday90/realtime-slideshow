const express = require('express')
const app = express()
const cors = require('cors')
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const PORT = 3000

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json('hai')
})

io.on('connection', socket => {
    console.log(`jamaah ${socket.id} hadir`)
    socket.on('modelPlus', () => {
        io.emit('resModel', 1)
    })
    socket.on('modelMin', () => {
        io.emit('resModel', -1)
    })
})

server.listen(PORT, () => {
    console.log(`sedekah ${PORT} dapat rezeki ${PORT*10}`)
})