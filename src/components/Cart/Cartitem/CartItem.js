import React, { useState } from "react";
import styles from "./CartItem.module.css";
import { connect, useDispatch } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shoping/shopingAction";
const CartItem = ({ item }) => {
  const [input, setInput] = useState(item.qty);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    dispatch(adjustItemQty(item.id, e.target.value));
  };
  console.log(adjustItemQty);
  const removeItem = () => {
    dispatch(removeFromCart(item.id));
  };
  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>$ {item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button onClick={removeItem} className={styles.actions__deleteItemBtn}>
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

//!Nếu bạn không muốn đăng ký để lưu trữ các bản cập nhật, hãy chuyển null hoặc undefined vào vị trí của mapStateToProps.
export default CartItem;
