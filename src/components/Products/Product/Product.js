import React from "react";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {
  addToCart,
  loadCurrentItem,
} from "../../../redux/Shoping/shopingAction";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const ClickItem = () => {
    dispatch(loadCurrentItem(product));
  };
  const addItem = () => {
    dispatch(addToCart(product.id));
  };
  return (
    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={product.image}
        alt={product.title}
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{product.title}</p>
        <p className={styles.details__desc}>{product.description}</p>
        <p className={styles.details__price}>$ {product.price}</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/${product.id}`}>
          <button
            onClick={ClickItem}
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            View Item
          </button>
        </Link>
        <button
          onClick={addItem}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
export default Product;
