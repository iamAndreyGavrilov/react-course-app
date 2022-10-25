import Costs from "./components/Costs";

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
      <Costs costs={costs} />
    </div>
  );
}

export default App;
