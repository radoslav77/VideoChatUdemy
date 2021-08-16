const express = require('express')
const http = require('http')


const PORT = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

 

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

let connectedPeers = []

// example routes 
/*
app.get('/hello', (req, res) => {
    res.send('hello')
})


app.get('/hello-there', (req, res) => {
    res.send('hello and how are you')
})
*/ 

io.on('connection', (socket) => {
    connectedPeers.push(socket.id)
    console.log(connectedPeers)

    socket.on('disconnect', () => {
        console.log('user disconected!')

        const newConnectedPeers = connectedPeers.filter((peerSockedId) => {
            peerSockedId !== socket.io
        })
        connectedPeers = newConnectedPeers
    })
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})