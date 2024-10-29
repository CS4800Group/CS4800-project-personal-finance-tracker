import React, { useState } from "react";
import CardButton from "../components/CardButton";

export default function ExpenseCard() {
  const [expenses, setExpenses] = useState(1234.56);

  const handleClick = () => {
    console.log("Edit button clicked");
  };

  return (
    <div className="h-[18vh] w-[96%] lg:w-1/3 lg:h-1/5 bg-white p-4">
      <div className="items-center flex justify-between">
        <h1 className="text-lg" id="card-header">This month's expenses:</h1>
        <CardButton onClick={handleClick}>
          <img
            src="./summaryPage/editButton.png"
            alt="Edit Button"
            className="h-10 w-10"
          />
        </CardButton>
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold p-2">${expenses}</h2>
    </div>
  );
}
