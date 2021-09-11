import React, { useEffect } from "react";
import Product from "./Product/Product";
import styles from "./Products.module.css";
import { connect, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../../redux/Shoping/shopingAction";
const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.shop);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     products: state.shop.products,
//   };
// };

export default Products;
