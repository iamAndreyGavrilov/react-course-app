import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const App = () => {
  const costs = [
    {
      date: new Date(2021, 10, 22),
      description: "Товар 1",
      amount: 100,
      id: "1",
    },
    {
      date: new Date(2022, 5, 12),
      description: "Товар 2",
      amount: 200,
      id: "2",
    },
    {
      date: new Date(),
      description: "Товар 3",
      amount: 300,
      id: "3",
    },
  ];

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log("App");
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
