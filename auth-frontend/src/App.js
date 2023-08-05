import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import About from './Pages/About';
import UserContext from './Context/UserContext';
import { useState } from 'react';

function App() {
  const defaultUser = {
    token: '',
    username: '',
    isLoggedIn: false
  };

  const [user, setUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/' element={<Login />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
