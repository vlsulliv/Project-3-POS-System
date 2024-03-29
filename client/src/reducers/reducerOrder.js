
import { REQUEST_ORDERS, RECEIVE_ORDERS, UPDATE_ORDERS } from '../actions/orderActions';


export const getSavedState = () => {
    let data = (localStorage.getItem('orders') || '{}');
    return JSON.parse(data);
}

const orders = (
  // default values for the state loaded from local storage
    state = getSavedState(), action) => {

    switch (action.type) {
        case REQUEST_ORDERS:
        return { 
        ...state, 
        loading: true 
    };
    case RECEIVE_ORDERS:
        return { 
            ...state, 
            orderList: action.payload.orderList,
            loading: false 
        };
    case UPDATE_ORDERS:
        return {
            ...state, 
            orderList: action.payload.orderList,
            loading: false
        }
    default:
        return state;
}
};
export default orders;