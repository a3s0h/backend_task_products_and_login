// App.jsx
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Products from './components/Products'
import AddProduct from './components/AddProducts'
import HomePage from './components/Homepage'

function App() {
  const [user, setUser] = useState(null);



  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/get' element={<Products />} />
        <Route path='/add' element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
