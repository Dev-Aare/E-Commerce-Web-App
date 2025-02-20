import { Link } from "react-router-dom";
import styles from "./ShopCard.module.scss"; // Styles
import { ProductDataProps } from "../../data/productData";

const ShopCard = ({ product }: { product: ProductDataProps }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className={styles.card}>
        <div className={styles.img_box}>
          <img
            src={product.images.preview}
            alt={product.description}
            draggable="false"
          />
        </div>
        <h1>{product.title}</h1>
        <p>${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ShopCard;
