function ExprenseDate(props) {
  const month = formatDate({ month: "long" });
  const day = formatDate({ day: "2-digit" });
  const year = props.date.getFullYear();

  function formatDate(dateConfig) {
    return props.date.toLocaleString("en-US", dateConfig);
  }

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExprenseDate;
