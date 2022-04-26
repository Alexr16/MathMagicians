import './App.css';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/calculator"
        element={(
          <div className="calc-container">
            <Calculator />
          </div>
    )}
      />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
