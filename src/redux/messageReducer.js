const SET_MESSAGE = 'SET-MESSAGE';

let initialState = {
    dialogs: [
        {userId: 1, name: 'John Doe', message: 'Hello'},
        {userId: 2, name: 'Geur Krik', message: 'And?'},
        {userId: 3, name: 'Doe John', message: 'Where are you?'},
        {userId: 4, name: 'John Wand', message: 'thx'},
        {userId: 5, name: 'Wand Geur', message: 'bye'},
        {userId: 6, name: 'Krik Doe', message: 'maybe to...'},
    ],
    messages: [
        {id: 0, sender: false, text: 'Hi', time: '10:28'},
        {id: 1, sender: true, text: 'Hello', time: '10:32'},
        {id: 2, sender: false, text: 'How are you?', time: '10:33'},
        {id: 3, sender: true, text: 'I`m fine, thx', time: '10:37'},
        {id: 4, sender: false, text: 'ns', time: '10:56'},
        {id: 5, sender: true, text: 'And you?', time: '10:56'},
    ],
}

const messageReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            let newMessage = {
                id: state.messages.length,
                sender: action.isSender,
                text: action.value,
                time: action.currentTime,
            };

            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state;
    }

}

export const addMessageActionCreator = (value) => {
    let currentTime = new Date();
    return {
        type: SET_MESSAGE,
        isSender: true,
        currentTime: `${('0' + currentTime.getHours()).slice(-2)}:${('0' + currentTime.getMinutes()).slice(-2)}`,
        value
    }
}

export default messageReducer;