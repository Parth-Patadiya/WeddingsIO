import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomeScreen} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
