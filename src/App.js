import './App.css';
import AddUser from './components/AddUser';
import Edit from './components/Edit';
import 'bootstrap/dist/css/bootstrap.css'
import { Route,Routes,BrowserRouter, useNavigate } from 'react-router-dom';
import View from './components/View';
import Login from './components/Login';

import { render } from '@testing-library/react';

function App() {
  const token=localStorage.getItem("token");
  
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/view' element={<View/>}/>
        <Route path='/add' element={<AddUser/>}/>
        <Route path='/edit' element={<Edit/>}/>
      
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
