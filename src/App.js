import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomeScreen} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
