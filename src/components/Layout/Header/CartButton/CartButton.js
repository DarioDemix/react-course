import { useContext } from "react";
import CartContext from "../../../../store/cart-context";
import classes from "./CartButton.module.css";
import CartIcon from "./CartIcon";

const CartButton = (props) => { 
  const cartCxt = useContext(CartContext);

  const numberOfCartItems = cartCxt.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
