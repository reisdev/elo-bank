import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import './css/App.css';
import 'semantic-ui-css/semantic.min.css'

import reducers from './controllers/store'
import Router from './controllers/router'
import Menu from "./views/components/header"

// Criando a store
const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Provider store={store}>
          <Router></Router>
        </Provider>
      </div>
    );
  }
}

export default App;
