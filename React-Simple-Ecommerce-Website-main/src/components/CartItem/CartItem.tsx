import { useContext, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { CartContext, CartItemProps } from "../../context/CartContext"; // Context
import { productData } from "../../data/productData"; // Data
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa"; // Icons
import styles from "./CartItem.module.scss"; // Styles

const CartItem = ({ item }: { item: CartItemProps }) => {
  const context = useContext(CartContext);
  if (!context) {
    return;
  }
  const { increaseCart, decreaseCart, removeCart, handleAmountChange } =
    context;

  const product = productData.filter((product) => product.id === item.id);
  const { title, price, images } = product[0];

  return (
    <div className={styles.card}>
      <div className={styles.product}>
        <Link to={`/product/${item.id}`}>
          <div className={styles.img}>
            <img src={`../${images.preview}`} alt={title} />
          </div>
        </Link>
        <div className={styles.detail}>
          <h1>{title}</h1>
          <div className={styles.button_group}>
            <button onClick={() => removeCart(item.id)}>
              <FaTrash />
            </button>
            <div className={styles.amount}>
              <button
                className={styles.decrease}
                onClick={() => decreaseCart(item.id)}
              >
                <FaMinus />
              </button>
              <input
                type="number"
                value={item.amount}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  const amount = Number(event.target.value);
                  handleAmountChange(item.id, amount);
                }}
              />
              <button
                className={styles.increase}
                onClick={() => increaseCart(item.id)}
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.price}>
        <h1>${(item.amount * price).toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default CartItem;
