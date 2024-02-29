const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function ToDoList() {
  return <h1>To do list for {formatDate(today)}</h1>;
}
