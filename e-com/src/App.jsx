// App.jsx
import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css'
import Products from './components/Products'
import AddProduct from './components/AddProducts'
import HomePage from './components/Homepage'

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    // Perform login logic and set the user state
    setUser({ name: "John Doe" });
  };

  const handleLogout = () => {
    // Perform logout logic and reset the user state
    setUser(null);
  };

  return (
    <Router>
      <Route path='/' element={ <HomePage/> }/>
      <Route path='/get' element={ <Products/> } />
      <Route path='/add' element={ <AddProduct/> } />
                
    </Router>
  );
}

export default App;
