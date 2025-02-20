import { productData, ProductDataProps } from "../../data/productData"; // Data
import ShopCard from "./ShopCard";
import styles from "./Shop.module.scss"; // style

const Shop = () => {
  const shopItem = productData.map((product: ProductDataProps) => {
    return <ShopCard key={product.id} product={product} />;
  });

  return (
    <div className="container">
      <div className={styles.shop}>{shopItem}</div>
    </div>
  );
};

export default Shop;
