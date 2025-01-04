import logo from './logo.svg';
import './App.css';
import MainPage from './page/mainpage/MainPage';
import ProjectPage from './page/projectpage/ProjectPage';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Project from './page/projectpage/Project';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage></MainPage>}></Route>
      <Route path='/project/:id' element ={<ProjectPage></ProjectPage>}></Route>
    </Routes>
  );
}

export default App;
