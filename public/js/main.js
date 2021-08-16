import * as store from './store.js'


const socket = io('/')


socket.on('connect', () => {
    console.log("success, conected to socket.io socket")
   store.setSoketId(socket.id)
})