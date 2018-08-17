import { put as dispatch, call, takeEvery , all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import axios from '../../../node_modules/axios';

function* getDataSaga(action) {
   try{
      const userInfo = yield call(axios.get, `/api/locations`)
      yield dispatch({
         type: 'GET_DATA',
         payload: userInfo.data
      })
   } catch(error){
      console.log('error in getDataSaga', error);
   }
}

function* editSaga(action) {
   try {
      
      yield call(axios.put, `/api/locations/${action.payload}`, action.payload)
      yield dispatch({
         type: 'FETCH_COORDINATES'
      })
   } catch (error) {
      console.log('error in editSaga', error);
   }
}

export default function* rootSaga() {

   yield takeEvery('SUBMIT_EDIT', editSaga)
   yield takeEvery('FETCH_COORDINATES', getDataSaga)

   yield all([
      userSaga(),
      loginSaga(),
      // watchIncrementAsync()
   ]);
}
