let state = {
    sockedId: null,
    localStream: null,
    reamoteStream: null,
    scrreenSharingActive: false,
    screenSharingStream: null,
    allowConnectionsFromStrangers: false,
    
}

export const setSoketId = (sockedId) => {
    state = {
        ...state,
        sockedId: sockedId
    }
    console.log(state)
}

export const setLocalStream = (stream) => {
    state = {
        ...state,
        localStream: stream
    }
}

export const setAllowConnectionsFromStrangers = (allowConnection) => {
    state = {
        ...state,
        allowConnectionsFromStrangers: allowConnection
    }
}

export const setScreenSharingActive = (scrreenSharingActive) => {
    state = {
        ...state,
        scrreenSharingActive,
    }
}

export const setScreenSharingStream = (stream) => {
    state = {
        ...state,
        screenSharingStream: stream
    }
}

export const setRemoteStream = (stream) => {
    state = {
        ...state,
        reamoteStream: stream
    }
}

export const getState = () => {
    return state
}