import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './scenes/Home';
import Welcome from './scenes/Welcome';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={ <Home /> }/>
        <Route exact path="/" element={ <Welcome /> }/>
      </Routes>
      {/* <div className="App">
        <header className="App-header">
        {(!isLoggedIn) 
          ? < Welcome setIsLoggedIn={setIsLoggedIn} />
          :< Home setIsLoggedIn={setIsLoggedIn}/>}
        </header>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
