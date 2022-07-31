import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Enter from './components/Enter';
import Search from './components/Search';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/enter' element={<Enter/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
