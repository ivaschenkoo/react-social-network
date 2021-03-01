import messageReducer from "./messageReducer";

let store = {
    _state: {
        messagesPage: {
            defaultMessageValue: '',
            dialogs: [
                {id: 1, name: 'John Doe', message: 'Hello'},
                {id: 2, name: 'Geur Krik', message: 'And?'},
                {id: 3, name: 'Doe John', message: 'Where are you?'},
                {id: 4, name: 'John Wand', message: 'thx'},
                {id: 5, name: 'Wand Geur', message: 'bye'},
                {id: 6, name: 'Krik Doe', message: 'maybe to...'},
            ],
            messages: [
                {sender: false, text: 'Hi', time: '10:28'},
                {sender: true, text: 'Hello', time: '10:32'},
                {sender: false, text: 'How are you?', time: '10:33'},
                {sender: true, text: 'I`m fine, thx', time: '10:37'},
                {sender: false, text: 'ns', time: '10:56'},
                {sender: true, text: 'And you?', time: '10:56'},
            ],
        }
    },
    _callSubscriber() {
        console.log('test');
    },
    dispatch(action) {
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._callSubscriber();
    },
    getState () {
        return this._state;
    },
    subscribe(obeserver) {
        this._callSubscriber = obeserver;
    }
}

window.store = store;
export default store;