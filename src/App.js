
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/homepage/Home';
import NavBar from './components/navbar/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormSellItem from './pages/formitemsell/formSellItem';



function App() {
  return (
    <div className="App text-start">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/formSellItem" element={<FormSellItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
