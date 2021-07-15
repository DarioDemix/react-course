import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const expenses = props.expenses.filter(
    (exp) => exp.date.getFullYear() === +selectedYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter selected={selectedYear} onSelection={setSelectedYear} />
      <ExpensesChart expenses={expenses}/>
      <ExpensesList expenses={expenses}></ExpensesList>
    </Card>
  );
};

export default Expenses;
