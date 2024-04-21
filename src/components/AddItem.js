import { Button, TextField } from "@mui/material";
import React from "react";
import NativeSelectDemo from "../DropDownList";

const AddItem = ({
  handleAddToDescription,
  handleAddItemAmount,
  handleExpense,
  handleAddButtonClick,
  addItemToDescription,
  addItemToAmount,
}) => {
  return (
    <div>
      <div className="justify-center m-5 ">
        <div className="pt-5 ">
          <div className="justify-center flex m-5">
            <TextField
              className="mr-5 bg-white w-15"
              id="outlined-search"
              label="Add Description"
              type="search"
              color="warning"
              value={addItemToDescription}
              onChange={handleAddToDescription}
            />
            <TextField
              className="mr-5 bg-white"
              id="outlined-search"
              label="Amount"
              type="search"
              color="warning"
              value={addItemToAmount}
              onChange={handleAddItemAmount}
            />
            <NativeSelectDemo
              selectedValueProp={handleExpense}
              className="mr-5 bg-white"
            />
            <Button variant="contained" onClick={handleAddButtonClick}>
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
