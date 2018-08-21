import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';

const userLocations = (state = [], action) => {
   switch (action.type) {
      case 'GET_DATA':
         console.log(action.payload);
         return action.payload;
      case 'CREATE_NEW_USER_LOCATION':
         console.log(action.payload);
         return action.payload;

      // case 'FETCH_COORDINATES':
      //    return action.payload;
      default:
         return state;
   }
}

const displayLocation = (state = [], action) => {
   switch (action.type) {
      case 'SHOW_LOCATION':
         console.log(action.payload);
         return action.payload;
      default:
         return state;
   }
}

const coordinateStore = (state = {}, action) => {
   switch (action.type) {
      case 'STORING_COORDINATES':
      console.log('+++++++', action.payload);
      
         return action.payload;
      default:
         return state;
   }
}

const store = combineReducers({
   user,
   login,
   userLocations,
   displayLocation,
   coordinateStore
});



export default store;
