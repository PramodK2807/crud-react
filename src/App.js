import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NewStudent from './pages/NewStudent';
import Update from './pages/Update';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route exact path='/register' element={<NewStudent/>} />
        <Route exact path='/update/:id' element={<Update/>} />
      </Routes>
    </>
  );
}

export default App;
