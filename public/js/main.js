import * as store from './store.js'
import * as wss from './wss.js'
import * as webRTCHandler from './webRTCHandler.js'
import * as constants from './constants.js'

// initialization of socket io connetction
const socket = io('/')
wss.registerSocketEvents(socket)


// register event listener for "invitation code" copy button
const personalCodeCopyButton = document.getElementById('personal_code_copy_button')
personalCodeCopyButton.addEventListener('click', () => {
    const personalCode = store.getState().sockedId
    navigator.clipboard && navigator.clipboard.writeText(personalCode)
})

// EventListeners for connection buttons
const personalCodeChatButton = document.getElementById('personal_code_chat_button')
const personalCodeVideoButton = document.getElementById('personal_code_video_button')

personalCodeChatButton.addEventListener('click', () => {
    const calleePersonalCode = document.getElementById('personal_code_input').value  
    const callType = constants.callType.CHAT_PERSONAL_CODE

    webRTCHandler.sendPreOffer(callType, calleePersonalCode)
})

personalCodeVideoButton.addEventListener('click', () => {
    const calleePersonalCode = document.getElementById('personal_code_input').value  
    const callType = constants.callType.VIDEO_PERSONAL_CODE

    webRTCHandler.sendPreOffer( callType, calleePersonalCode)
})