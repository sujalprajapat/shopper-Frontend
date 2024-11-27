import './App.css';
import Home from './UserSide/Home';
import './UserSide/UserSide.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from './Admin/AdminLogin';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<AdminLogin/>}/>
      </Routes>
    </>
  );
}

export default App;
