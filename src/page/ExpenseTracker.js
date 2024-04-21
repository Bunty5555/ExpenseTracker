// import React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import NativeSelectDemo from "./DropDownList";
import { useState } from "react";
import Header from "../components/Header";
import AddItem from "../components/AddItem";
import ListItem from "../components/ListItem";

const ExpenseTracker = () => {
  const [addItemToDescription, setAddItemToDescription] = useState("");
  const [addItemToAmount, setAddItemToAmount] = useState("");
  const [incomeItems, setIncomeItems] = useState([]);
  const [expense, setExpense] = useState([]);
  const [paymentValue, setPaymentValue] = useState("Income");

  const handleAddToDescription = (event) => {
    console.log(event.target.value);
    setAddItemToDescription(event.target.value);
  };

  const handleAddItemAmount = (event) => {
    setAddItemToAmount(event.target.value);
  };

  const handleExpense = (event) => {
    const selectValue = event.target.value;
    setPaymentValue(selectValue);
    console.log("handleExpense", selectValue);
  };

  const handleAddButtonClick = (event) => {
    if (paymentValue === "Income") {
      setIncomeItems((oldItem) => {
        return [
          ...oldItem,
          { description: addItemToDescription, amount: addItemToAmount },
        ];
      });
    } else {
      setExpense((oldItem) => {
        return [
          ...oldItem,
          { description: addItemToDescription, amount: addItemToAmount },
        ];
      });
    }
    setAddItemToDescription("");
    setAddItemToAmount("");
  };
  return (
    <>
      <Header expense={expense} incomeItems={incomeItems} />
      <AddItem
        handleAddToDescription={handleAddToDescription}
        handleAddItemAmount={handleAddItemAmount}
        handleExpense={handleExpense}
        handleAddButtonClick={handleAddButtonClick}
        addItemToDescription={addItemToDescription}
        addItemToAmount={addItemToAmount}
      />
      <ListItem incomeItems={incomeItems} expense={expense} />
    </>
  );
};

export default ExpenseTracker;
