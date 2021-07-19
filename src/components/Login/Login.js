import { useEffect, useState, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../context/auth-context";

const userInput = 'USER_INPUT';
const inputBlur = 'INPUT_BLUR';

const emailReducer = (state, action) => {
  if(action.type === userInput) {
    return {
      value: action.val,
      isValid: action.val.includes('@'),
    };  
  }
  if (action.type === inputBlur) {
    return {
      value: state.value,
      isValid: state.value.includes('@')
    }
  }
  return {
    value: "",
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  const updatedState = {...state};
  if(action.type === userInput) {
    updatedState.value = action.val;
    updatedState.isValid = action.val.trim().length > 6;
  }
  if(action.type === inputBlur) {
    updatedState.isValid = state.value.trim().length > 6;
  }
  return updatedState;
};

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null
  });

  const { isValid: emailIsvalid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const authCxt = useContext(AuthContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(`Check form validity!`);
      setFormIsValid(emailIsvalid && passwordIsValid);
    }, 500);

    return () => {
      console.log(`cleanup`);
      clearTimeout(timeout);
    }; // cleanup function
  }, [emailIsvalid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: userInput, val: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: userInput, val: event.target.value});
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: inputBlur
    })
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: inputBlur
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCxt.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
