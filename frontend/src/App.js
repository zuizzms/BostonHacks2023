import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Results from './components/results-page/Results';
import Header from './Header/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        < Header />
        <Routes>
          <Route path="/" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
