import { useParams } from "react-router-dom";
import { productData } from "../data/productData"; // Data
import Page404 from "./Page404";
import ShowProduct from "../components/Product/ShowProduct";

const Product = () => {
  const { productID } = useParams<{ productID: string }>();
  const haveProduct =
    Number(productID) >= 0 && Number(productID) <= productData.length;

  return haveProduct ? (
    <ShowProduct productID={productID || ""} />
  ) : (
    <Page404 />
  );
};

export default Product;
