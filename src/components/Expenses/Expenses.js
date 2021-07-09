import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const selectionHandler = (year) => setSelectedYear(year);
  const expenses = props.expenses.filter(exp =>  exp.date.getFullYear() === +selectedYear);

  return (
    <Card className="expenses">
      <ExpenseFilter selected={selectedYear} onSelection={selectionHandler} />
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
