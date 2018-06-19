import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/App/App.js"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import rootReducer from './reducers'

const store = createStore(function app(state = [], action) {
  return state
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
