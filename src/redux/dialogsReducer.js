const SEND_MESSAGE = 'dialog/SEND-MESSAGE';

let initialState = {
    dialogs :  [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Igor'},
        {id: 3, name: 'Vanya'},
        {id: 4, name: 'Misha'}
    ],
    messages : [
        {id: 1, message: 'Hello world!!!!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I\'m good'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id:5 , message: body}]
            }
        default :
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;