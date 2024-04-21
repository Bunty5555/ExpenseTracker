import React from "react";

const Header = ({ incomeItems, expense }) => {
  const totalIncome = () => {
    let total = 0;
    incomeItems.forEach((item) => {
      total += parseInt(item.amount);
    });
    return total;
  };

  const totalExpense = () => {
    let total = 0;
    expense.forEach((item) => {
      total += parseInt(item.amount);
    });
    return total;
  };
  const totalBalance = () => {
    const totalBal = totalIncome() - totalExpense();
    return totalBal;
  };
  return (
    <div>
      <div className="justify-center">
        <img
          className="relative w-[100%]"
          src="https://raw.githubusercontent.com/Shubh0405/Budget_app_javascript/master/back.png"
          alt=""
        />

        <h1 className="absolute top-0 left-1/2 font-bold bg-white  text-blue-600 justify-center flex text-5xl pb-1">
          Expense Tracking
        </h1>
        <div className="absolute top-20 left-1/2 font-bold text-green-600 justify-center flex text-3xl">
          Total Income {totalIncome()}
        </div>
        <h2 className="absolute font-bold top-40 left-1/2 text-red-500 justify-center flex text-3xl">
          Total Expense {totalExpense()}
        </h2>
        <h2 className="absolute font-bold top-42 left-1/2 text-orange-500 justify-center flex text-3xl">
          Total Balance {totalBalance()}
        </h2>
      </div>
    </div>
  );
};

export default Header;
