import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext"; // Context
import { productData } from "../../data/productData"; // Data
import Background from "../Background/Background";
import styles from "./ShowProduct.module.scss"; // style

interface ProductProps {
  productID: string;
}
const Product: React.FC<ProductProps> = ({ productID }) => {
  const context = useContext(CartContext);
  if (!context) {
    return;
  }
  const { increaseCart, cart } = context;

  const product = productData.filter(
    (product) => product.id === Number(productID)
  );

  const productInCart = cart.filter((item) => item.id === Number(productID));
  const amount = productInCart.length > 0 ? productInCart[0].amount : false;

  const { title, description, price, images } = product[0];

  const imgs: string[] = [
    images.preview,
    images.model[0],
    images.model[1],
    images.model[2],
    images.design,
  ];

  const [previewImage, setPreviewImage] = useState<string>(() => imgs[0]);

  const handleImagesClick = (index: number) => {
    setPreviewImage(imgs[index]);
  };

  return (
    <>
      <div className="container">
        <div className={styles.product}>
          <div className={styles.img}>
            <div className={styles.bigImg}>
              <img src={`../${previewImage}`} alt={title} draggable="false" />
            </div>
            <div className={styles.selectImg}>
              {imgs.map((img, index) => (
                <div
                  className={`${styles.smallImg} ${
                    previewImage === img ? `${styles.active}` : ""
                  }`}
                  key={index}
                >
                  <img
                    src={`../${img}`}
                    onClick={() => {
                      handleImagesClick(index);
                    }}
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.detail}>
            <div className="top">
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.description}>{description}</p>
            </div>
            <div className="bottom">
              <p className={styles.price}>${price.toFixed(2)}</p>
              <div className={styles.button_group}>
                <button
                  className={styles.buy_now}
                  onClick={() => alert("Can't buy now")}
                >
                  Buy now
                </button>
                <button
                  className={styles.add_to_cart}
                  onClick={() => increaseCart(Number(productID))}
                >
                  Add to cart {amount ? `(${amount})` : ""}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Background />
    </>
  );
};

export default Product;
