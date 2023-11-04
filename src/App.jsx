import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/App.css';
import Nav from './components/Nav';
import DoublyLinkedList from './pages/DoublyLinkedList';
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doubly-linked-list" element={<DoublyLinkedList/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
