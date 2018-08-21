import { put as dispatch, call, takeEvery , all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import axios from '../../../node_modules/axios';


function* deleteSaga(action) {
   console.log('got to deleteSaga');
   try{
      yield call(axios.delete, `/api/locations/${action.payload.id}`)
      yield dispatch({
         type: 'DELETE_LOCATION',
         payload: this.state.id
      })
   } catch (error) {
      console.log('error in deleteSaga:', error);
   }
}

function* editSaga(action) {
   try {
      console.log('HERE',action.payload);
      yield call(axios.put, `/api/locations/${action.payload}`, action.payload)
      yield dispatch({
         type: 'FETCH_COORDINATES'
      })
   } catch (error) {
      console.log('error in editSaga:', error);
   }
}



function* getDataSaga(action) {
   try{
      const userInfo = yield call(axios.get, `/api/locations`)
      yield dispatch({
         type: 'GET_DATA',
         payload: userInfo.data
      })
   } catch(error){
      console.log('error in getDataSaga:', error);
   }
}

function* getDisplayLocationsSaga(action) {
   try{
      const userInfo = yield call(axios.get, `/api/locations/specific`)
      yield dispatch({
         type: 'SHOW_LOCATION',
         payload: userInfo.data
      })
   } catch(error){
      console.log('error in getDataSaga:', error);
   }
}

function* newLocationSaga(action) {
   try{
      yield call(axios.post, `/api/locations`, action.payload)
      yield dispatch({
         type: 'CREATE_NEW_USER_LOCATION',
         payload: action.payload
      })
   } catch(error) {
      console.log('error in newLocationSaga:', error);
      
   }
}


export default function* rootSaga() {
   yield takeEvery('FETCH_COORDINATES', getDataSaga)
   yield takeEvery('GET_DISPLAY_LOCATIONS', getDisplayLocationsSaga)
   yield takeEvery('SUBMIT_DELETE', deleteSaga)
   yield takeEvery('SUBMIT_EDIT', editSaga)
   yield takeEvery('SUBMIT_NEW_LOCATION', newLocationSaga)
   

   yield all([
      userSaga(),
      loginSaga(),
      // watchIncrementAsync()
   ]);
}
