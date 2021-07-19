import { useEffect, useState, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../context/auth-context";
import Input from "../UI/Input/Input";

const userInput = "USER_INPUT";
const inputBlur = "INPUT_BLUR";

const emailReducer = (state, action) => {
  if (action.type === userInput) {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }
  if (action.type === inputBlur) {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  const updatedState = { ...state };
  if (action.type === userInput) {
    updatedState.value = action.val;
    updatedState.isValid = action.val.trim().length > 6;
  }
  if (action.type === inputBlur) {
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
    isValid: null,
  });

  const { isValid: emailIsvalid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const authCxt = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

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
    dispatchEmail({ type: userInput, val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: userInput, val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: inputBlur,
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: inputBlur,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCxt.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsvalid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          isValid={emailIsvalid}
          label="E-Mail"
          type="email"
          id="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          isValid={passwordIsValid}
          label="Password"
          type="password"
          id="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
