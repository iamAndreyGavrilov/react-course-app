import { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };
  const cancelCostDataHandler = () => {
    setIsFormVisible(false);
  };

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    cancelCostDataHandler();
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Добавить Новый расход</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostDataHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
