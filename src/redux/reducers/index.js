import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';

const userLocation = (state = [], action) => {
   switch (action.type) {
      case 'GET_DATA':
         return action.payload;
      case 'FETCH_COORDINATES':
         return state;
      default:
         return state;
   }
}


const store = combineReducers({
   user,
   login,
   userLocation,
});



export default store;
