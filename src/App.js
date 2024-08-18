import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignUpSuccess from './components/SignUpSuccess';
import VerifyEmail from './components/VerifyEmail';
import ForgotePassword from './components/ForgotePassword';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/' Component={HomeScreen} />
          <Route path='/signUp' Component={SignUp} />
          <Route path='/signIn' Component={SignIn} />
          <Route path='/successUp' Component={SignUpSuccess} />
          <Route path='/verifyEmail' Component={VerifyEmail} />
          <Route path='/forgotPassword' Component={ForgotePassword} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
