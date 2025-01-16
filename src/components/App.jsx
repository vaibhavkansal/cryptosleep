import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Body from './Body'
import { Provider } from 'react-redux'
import appstore from '../utils/appstore'

const App = () => {
  
  return (
    <Provider store={appstore}>
        <Body/>
    </Provider>
  )
}

export default App