import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/App/App.js"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(function app(state = [], action) {
  return state
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
