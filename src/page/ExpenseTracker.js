// import React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import NativeSelectDemo from "./DropDownList";
import { useState } from "react";
import Header from "../components/Header";
import AddItem from "../components/AddItem";
import ListItem from "../components/ListItem";

const ExpenseTracker = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [incomeItems, setIncomeItems] = useState([]);
  const [expense, setExpense] = useState([]);
  const [paymentValue, setPaymentValue] = useState("Income");

  const handleDescription = (event) => {
    console.log(event.target.value);
    setDescription(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleExpense = (event) => {
    const selectValue = event.target.value;
    setPaymentValue(selectValue);
    console.log("handleExpense", selectValue);
  };

  const handleAddButtonClick = (event) => {
    if (paymentValue === "Income") {
      setIncomeItems((oldItem) => {
        return [...oldItem, { description: description, amount: amount }];
      });
    } else {
      setExpense((oldItem) => {
        return [...oldItem, { description: description, amount: amount }];
      });
    }
    setDescription("");
    setAmount("");
  };
  return (
    <>
      <Header expense={expense} incomeItems={incomeItems} />
      <AddItem
        handleDescription={handleDescription}
        handleAmount={handleAmount}
        handleExpense={handleExpense}
        handleAddButtonClick={handleAddButtonClick}
        addItemToDescription={description}
        addItemToAmount={amount}
      />
      <ListItem incomeItems={incomeItems} expense={expense} />
    </>
  );
};

export default ExpenseTracker;
