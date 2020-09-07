
const initState = {
}

//this is where we maniplate the state
const dreamReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_DREAMCATCHER':
            console.log("added dreamcatcher", action.dreamcatcher)
            return state;
        case 'ADD_DREAMCATCHER_ERROR': console.log('add dreamcatcher failed', action.err)
            return state;
        default: return state;
    }
}

export default dreamReducer;