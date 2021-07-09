import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expense, setExpense] = useState({
    title: "",
    amount: 0,
    date: '2021-07-09',
  });

  const titleChangeHandler = (event) => {
    expense.title = event.target.value;

    setExpense(expense);
  };

  const amountChangeHandler = (event) => {
    expense.amount = event.target.value;

    setExpense(expense);
  };

  const dateChangeHandler = (event) => {
    expense.date = event.target.value;

    setExpense(expense);
  };

  const formSubmitHandler = () => {
      console.log("expense =>", expense);
  }

  return (
    <form>
      <div className="new-expense__controls">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__controls">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__controls">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button onClick={formSubmitHandler} type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
