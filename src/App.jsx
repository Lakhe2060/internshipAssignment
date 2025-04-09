import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { CartProvider } from "./contexts/CartContext";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <CartProvider>
      <Router>
        <div className="app">
          {isAuthenticated && <Header onLogout={handleLogout} />}
          <main className="main-content">
            <Routes>
              <Route
                path="/login"
                element={
                  isAuthenticated ? (
                    <Navigate to="/" />
                  ) : (
                    <Login setIsAuthenticated={setIsAuthenticated} />
                  )
                }
              />
              <Route
                path="/"
                element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/product/:id"
                element={
                  isAuthenticated ? <ProductDetail /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/cart"
                element={isAuthenticated ? <Cart /> : <Navigate to="/login" />}
              />
              <Route
                path="*"
                element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
              />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
