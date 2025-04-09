import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import styles from "./Header.module.css";

const Header = ({ onLogout }) => {
  const { getCartCount } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Link to="/">Legit Store</Link>
      </div>

      <nav className={styles.headerNav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart" className={styles.cartLink}>
              Cart
              {getCartCount() > 0 && (
                <span className={styles.cartCount}>{getCartCount()}</span>
              )}
            </Link>
          </li>
          <li>
            <button className={styles.logoutBtn} onClick={onLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
