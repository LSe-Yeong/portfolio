import logo from './logo.svg';
import './App.css';
import MainPage from './page/mainpage/MainPage';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage></MainPage>}></Route>
    </Routes>
  );
}

export default App;
