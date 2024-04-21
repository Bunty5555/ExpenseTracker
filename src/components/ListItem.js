import React from "react";

const ListItem = ({ incomeItems, expense }) => {
  return (
    <div>
      <div className="relative">
        <div className=" -z-30  w-screen">
          <div className="flex justify-center">
            <div className="p-2 mr-36 justify-between">
              <h1 className="text-green-600 text-2xl">INCOME</h1>{" "}
              <div className="justify-between flex ">
                <div className="pr-20 ">
                  {/* <form action="">{addItemToDescription}</form> */}
                  <div className="mr-30 justify-between flex w-25">
                    {incomeItems.map((item, index) => {
                      return (
                        <ol className="flex justify-between" key={index}>
                          <div>{item.description}</div>
                          <div>{item.amount}</div>
                        </ol>
                      );
                    })}
                  </div>
                </div>

                <div className="ml-20 text-green-700">
                  {/* <form action="">{addItemToAmount}</form> */}
                  {/* <ol>
                    {incomeItems.map((item, index) => {
                      return <li key={index}>{item.amount} ⟨₹⟩</li>;
                    })}
                  </ol> */}
                </div>
              </div>
            </div>
            <div className="p-2 ml-32">
              <h1 className="text-red-600 text-2xl">Expense</h1>
              <div className="justify-between flex ">
                <div className="mr-20">
                  {/* <form action="">{addItemToDescription}</form> */}
                  <ol>
                    {expense.map((item, index) => {
                      return <li key={index}>{item.description}</li>;
                    })}
                  </ol>
                </div>

                <div className="ml-20 text-red -700 text-red-600">
                  {/* <form action="">{addItemToAmount}</form> */}
                  <ol>
                    {expense.map((item, index) => {
                      return <li key={index}>{item.amount} ⟨₹⟩</li>;
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
