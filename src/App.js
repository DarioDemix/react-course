import { useState } from "react";
import expensesJSON from './data/expenses.json';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const { expenses: initialExpenses } = expensesJSON;
  initialExpenses.forEach(exp => exp.date = new Date(exp.date))
  const [ expenses, setExpenses ] = useState(initialExpenses);

  const addExpenseHandler = expense => setExpenses(oldValue => [expense, ...oldValue]);

  return (
    <div>
      <NewExpense onNewExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
