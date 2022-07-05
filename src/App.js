import './App.css';
import AddUser from './components/AddUser';
import Edit from './components/Edit';
import 'bootstrap/dist/css/bootstrap.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import View from './components/View';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<View/>}/>
      </Routes>
      <Routes>
        <Route path='/add' element={<AddUser/>}/>
      </Routes>
      <Routes>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
