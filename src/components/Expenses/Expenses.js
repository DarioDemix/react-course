import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const expenses = props.expenses.filter(
    (exp) => exp.date.getFullYear() === +selectedYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter selected={selectedYear} onSelection={setSelectedYear} />
      <ExpensesList expenses={expenses}></ExpensesList>
    </Card>
  );
};

export default Expenses;
