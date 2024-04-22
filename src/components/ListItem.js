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
                  <ol className="justify-between w-25">
                    {incomeItems.map((item, index) => {
                      return (
                        <div className="flex justify-between w-44" key={index}>
                          <li>{item.description}</li>
                          <li className="text-green-500">{item.amount} ⟨₹⟩</li>
                        </div>
                      );
                    })}
                  </ol>
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
                      return (
                        <div className="flex justify-between w-44">
                          <li key={index}>{item.description}</li>
                          <li className="text-red-500" key={index}>
                            {item.amount} ⟨₹⟩
                          </li>
                        </div>
                      );
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
