import React from "react";
import styles from "./Single.module.css";

import { connect, useSelector } from "react-redux";
import { addToCart } from "../../redux/Shoping/shopingAction";
import { useDispatch } from "react-redux";

const SingleItem = () => {
  const dispatch = useDispatch();
  const { currentItem } = useSelector((state) => state.shop);
  const current = currentItem;
  const addCart = () => {
    dispatch(addToCart(current.id));
  };
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={current.image}
        alt={current.title}
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{current.title}</p>
        <p className={styles.details__description}>{current.description}</p>
        <p className={styles.details__price}>$ {current.price}</p>

        <button onClick={addCart} className={styles.details__addBtn}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
