import * as store from './store.js'
import * as ui from './ui.js'

let socketIO = null
export const registerSocketEvents = (socket) => {
    socket.on('connect', () => {
        socketIO = socket
        console.log("success, conected to socket.io socket")
       store.setSoketId(socket.id)
       ui.updatePersonalCode(socket.id)
    })
}

export const sendPreOffer = (data) => {
    console.log("emmiting to server pre offer event")
    socketIO.emit("pre-offer", data)
  }