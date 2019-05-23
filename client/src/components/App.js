import React from 'react';
import './css/App.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Navbar from './Navbar'
import Panels from './Panels'
import Paging from './Paging'


function App() {
  return (
   <Provider store={store}> 
   <div>
     <Navbar/>
     <div className='container'>
     <Panels/>
     <Paging/>
     </div>
   </div>
   </Provider>
  )
}

export default App;
