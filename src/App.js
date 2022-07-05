import './App.css';
import AddUser from './components/AddUser';
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
      
      </BrowserRouter>
    </div>
  );
}

export default App;
