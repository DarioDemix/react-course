import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const expenseDataHandler = (enteredExpense) => {
    const expense = {
      id: Math.random().toString(),
      ...enteredExpense,
    };
    props.onNewExpense(expense);
    showFormAndHideBtn();
  };

  const [isFormOpened, setIsFormOpened] = useState(false);
  
  const showFormAndHideBtn = () => {
    setIsFormOpened((prevIsFormOpened) => {
      setRenderedElement(prevIsFormOpened ? newExpensesBtn : expensesForm);
      return !prevIsFormOpened;
    });
    // setRenderedElement(prevRenderedElement => rand >= 0.5 ? <h1>ciao</h1> : expensesForm);
  };

  const expensesForm = <ExpenseForm onSaveExpenseData={expenseDataHandler} onCancel={showFormAndHideBtn} />;
  
  const newExpensesBtn = (
    <div className="new-expense__button">
      <button onClick={showFormAndHideBtn}>Add New Expense</button>
    </div>
  );
  
  const [renderedElement, setRenderedElement] = useState(newExpensesBtn);

  return <div className="new-expense">{renderedElement}</div>;
};

export default NewExpense;
