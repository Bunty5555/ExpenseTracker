// import React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import NativeSelectDemo from "./DropDownList";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import AddItem from "../components/AddItem";
import ListItem from "../components/ListItem";

const getIncomeItems = () => {
  let list = localStorage.getItem("incomeItems");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("incomeItems"));
  } else {
    return [];
  }
};
const getExpenseItem = () => {
  let list = localStorage.getItem("expenseItem");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("expenseItem"));
  } else {
    return [];
  }
};

const ExpenseTracker = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [incomeItems, setIncomeItems] = useState(getIncomeItems());
  const [expenseItem, setExpenseItem] = useState(getExpenseItem());
  const [paymentValue, setPaymentValue] = useState("Income");

  const handleDescription = (event) => {
    console.log(event.target.value);
    setDescription(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  useEffect(() => {
    localStorage.setItem("incomeItems", JSON.stringify(incomeItems));
  }, [incomeItems]);
  useEffect(() => {
    localStorage.setItem("expenseItem", JSON.stringify(expenseItem));
  }, [expenseItem]);

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
      setExpenseItem((oldItem) => {
        return [...oldItem, { description: description, amount: amount }];
      });
    }
    setDescription("");
    setAmount("");
  };
  return (
    <>
      <Header expense={expenseItem} incomeItems={incomeItems} />
      <AddItem
        handleDescription={handleDescription}
        handleAmount={handleAmount}
        handleExpense={handleExpense}
        handleAddButtonClick={handleAddButtonClick}
        addItemToDescription={description}
        addItemToAmount={amount}
      />
      <ListItem incomeItems={incomeItems} expense={expenseItem} />
    </>
  );
};

export default ExpenseTracker;
