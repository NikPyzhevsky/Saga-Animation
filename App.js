/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
import { applyMiddleware, combineReducers, createStore } from "redux"
import themeReducer from "./src/store/themeReducer"
 import createSagaMiddleware from 'redux-saga' 
 import { Provider } from 'react-redux';
import HomeScreen from "./src/HomeScreen"
import rootSaga from './src/store/themeSaga'
// import thunk from 'redux-thunk';
 
const rootReducer = combineReducers({
  themeReducer: themeReducer
  });

  const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))


 


 sagaMiddleware.run(rootSaga)

// const rootReducer = combineReducers({
//   Calc:Calc
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(sagaMiddleware)
//   )
// );



 const App=() => {
  
 
   return (
     <Provider store = {store}>
       <HomeScreen/>
     </Provider>
       
   );
 };
 

 export default App;
 