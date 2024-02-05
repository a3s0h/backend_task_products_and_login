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
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/get">Shop</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/signin">Sign In</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <hr />

        <Route path="/" exact component={HomePage} />
        <Route
          path="/signup"
          render={() => (
            <SignupPage onSignup={() => console.log("Signup logic here")} />
          )}
        />
        <Route
          path="/signin"
          render={() => <SigninPage onLogin={handleLogin} />}
        />
        <Route
          path="/get"
          render={() =>
            user ? <Products user={user} /> : <Redirect to="/signin" />
          }
        />
        <Route path="/add" component={AddProduct} />
      </div>
    </Router>
  );
}

export default App;

