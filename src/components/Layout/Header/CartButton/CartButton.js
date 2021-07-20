import { useContext, useEffect, useState } from "react";
import CartContext from "../../../../store/cart-context";
import classes from "./CartButton.module.css";
import CartIcon from "./CartIcon";

const CartButton = (props) => { 
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCxt = useContext(CartContext);

  const {items} = cartCxt;

  const numberOfCartItems = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);


  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if(cartCxt.items.length === 0) return;

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
