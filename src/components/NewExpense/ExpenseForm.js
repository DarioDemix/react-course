import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    // use this approach to avoid data inconsistency
    setExpense((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setExpense((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setExpense((prevState) => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const finalExpense = {
      ...expense,
      date: new Date(expense.date),
    };
    console.log(finalExpense);
    setExpense({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <label>Title</label>
        <input
          type="text"
          value={expense.title}
          onChange={titleChangeHandler}
        />
      </div>
      <div className="new-expense__controls">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={expense.amount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__controls">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={expense.date}
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
