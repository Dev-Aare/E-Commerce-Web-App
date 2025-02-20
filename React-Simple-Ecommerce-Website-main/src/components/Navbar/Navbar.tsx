import { useContext } from "react";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../../hook/useScrollPosition"; // Custom Hook
import { CartContext } from "../../context/CartContext"; // Context
import { FaShoppingCart } from "react-icons/fa"; // Icons
import styles from "./Navbar.module.scss"; //Styles

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const context = useContext(CartContext);
  if (!context) {
    return;
  }
  const { totalCart } = context;

  return (
    <>
      <nav
        className={`${styles.navbar} container ${
          scrollPosition > 40 ? `${styles.scroll}` : ""
        }`}
      >
        <div className={styles.logo}>
          <Link to="/">
            <img src="/favicon.svg" />
            <h1>S4U</h1>
          </Link>
        </div>
        <ul className={styles.link_group}>
          <li>
            <Link to="/cart" title="Cart">
              <FaShoppingCart />
              <span className={totalCart === 0 ? `${styles.zero}` : ""}>
                {totalCart}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
