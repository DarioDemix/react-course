import './ExpenseDate.css';

const ExprenseDate = (props) => {
  const month = formatDate({ month: "long" });
  const day = formatDate({ day: "2-digit" });
  const year = props.date.getFullYear();

  function formatDate(dateConfig) {
    return props.date.toLocaleString("en-US", dateConfig);
  }

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExprenseDate;
