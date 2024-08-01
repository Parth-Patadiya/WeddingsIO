import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomeScreen} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
