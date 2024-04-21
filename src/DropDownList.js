import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function NativeSelectDemo({ selectedValueProp }) {
  return (
    <Box sx={{ minWidth: 155 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Item Type
        </InputLabel>
        <NativeSelect
          onChange={selectedValueProp}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
