import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Loading from './components/Loading';
import Home from './pages/Home';
import Exercicios from './pages/Exercicios';
import Ex01 from './pages/Ex01';
import Ex02 from './pages/Ex02';
import Ex03 from './pages/Ex03';
import Ex04 from './pages/Ex04';
import Ex05 from './pages/Ex05';
import Ex06 from './pages/Ex06';
import Ex07 from './pages/Ex07';
import Ex08 from './pages/Ex08';
import Ex09 from './pages/Ex09';
import Ex10 from './pages/Ex10';
import Ex11 from './pages/Ex11';
import Ex12 from './pages/Ex12';
import Ex13 from './pages/Ex13';
import Ex14 from './pages/Ex14';
import Ex15 from './pages/Ex15';
import Ex16 from './pages/Ex16';
import Ex17 from './pages/Ex17';
import Ex18 from './pages/Ex18';
import Ex19 from './pages/Ex19';
import Ex20 from './pages/Ex20';
import Ex21 from './pages/Ex21';

function App() {
  

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ex01" element={<Ex01 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
