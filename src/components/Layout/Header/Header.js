import { Fragment } from "react";
import mealsImg from "../../../assets/meals.jpg";
import CartButton from "./CartButton/CartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="A table full of food" />
      </div>
  </Fragment>;
};

export default Header;
