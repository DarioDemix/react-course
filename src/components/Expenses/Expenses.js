import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const selectionHandler = (year) => setSelectedYear(year);
  const expenses = props.expenses.filter(
    (exp) => exp.date.getFullYear() === +selectedYear
  );

  const evaluateExpensesContent = () => {
    let expensesContent = <p>No expenses found.</p>;
    if (expenses.length > 0) {
      expensesContent = expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      });
      return expensesContent;
    }
  };

  return (
    <Card className="expenses">
      <ExpenseFilter selected={selectedYear} onSelection={selectionHandler} />
      {evaluateExpensesContent()}
    </Card>
  );
};

export default Expenses;
