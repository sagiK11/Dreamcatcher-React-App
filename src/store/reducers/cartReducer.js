const initState = {
    items: [],
    cartPrice: 0,
    itemsNumber: 0,
}

export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const newItem = {
                model: action.dreamcatcher.model,
                amount: parseInt(action.amount),
                price: action.dreamcatcher.price,
                img: action.dreamcatcher.img,
            }
            const itemIndex = state.items.findIndex(item => item.model === newItem.model)
            const price = parseInt(newItem.price.slice(0, 3));
            //Updating the amount field if the model is already in the array.
            if (itemIndex >= 0) {
                if (newItem.amount < action.dreamcatcher.amount)//exceeding max inventory.
                    return state;
                let newArray = [...state.items];
                newArray[itemIndex] = {
                    ...newArray[itemIndex],
                    amount: newArray[itemIndex].amount + newItem.amount,
                }
                return {
                    ...state,
                    items: [...newArray],
                    cartPrice: state.cartPrice + (price * newItem.amount),
                    itemsNumber: state.itemsNumber + newItem.amount,
                }
            }
            return {
                ...state,
                items: [...state.items, newItem],
                cartPrice: state.cartPrice + (price * newItem.amount),
                itemsNumber: state.itemsNumber + newItem.amount,
            }
        }
        case 'REMOVE_FROM_CART': {
            const newArray = state.items.filter((item) => item.model !== action.item.model)
            const price = parseInt(action.item.price.slice(0, 3));
            const amount = action.item.amount;
            return {
                ...state,
                items: [...newArray],
                cartPrice: state.cartPrice - (price * amount),
                itemsNumber: state.itemsNumber - amount,

            }
        }
        default: return state;
    }

}