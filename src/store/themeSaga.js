
import { all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { SWITCH_THEME_SAGA,SWITCH_THEME } from "./actionsTheme"

const delay = (ms) => new Promise(res => setTimeout(res, ms))




  
  function* helloSaga() {
      console.log('Hello Sagas!')
  }
  
  function* switchTheme(action) {
     yield delay(500);
     yield put({type: SWITCH_THEME, theme: action.theme});
  }
  
  function* mySaga() {
      yield takeLatest(SWITCH_THEME_SAGA , switchTheme);
    //   yield takeLatest(DISCREMENT_SAGA, discrement);
  }
  
  
  export default function* rootSaga() {
      yield all([
          helloSaga(),
          mySaga()
      ])
  }