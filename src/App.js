import CostItem from "./components/CostItem";

function App() {
  const costs = [
    {
      date: new Date(2021, 10, 22),
      description: "Товар 1",
      amount: 100,
    },
    {
      date: new Date(2022, 5, 12),
      description: "Товар 2",
      amount: 200,
    },
    {
      date: new Date(),
      description: "Товар 3",
      amount: 300,
    },
  ];

  return (
    <div>
      <h1>Hello React!</h1>
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      />
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      />
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      />
    </div>
  );
}

export default App;
