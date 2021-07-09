import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const expenseDataHandler = (enteredExpense) => {
    const expense = {
      id: Math.random().toString(),
      ...enteredExpense,
    };
    props.onNewExpense(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;
