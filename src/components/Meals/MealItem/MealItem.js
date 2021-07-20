import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCxt = useContext(CartContext);

  const {
    meal: { id, name, description, price },
  } = props;

  const formattedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCxt.addItem({
      id,
      name,
      amount,
      price

    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={id}/>
      </div>
    </li>
  );
};

export default MealItem;
