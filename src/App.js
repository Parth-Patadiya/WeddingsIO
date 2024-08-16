import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/' Component={HomeScreen} />
          <Route path='/signUp' Component={SignUp} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
