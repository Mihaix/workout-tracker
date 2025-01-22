import React from "react";
import { TextField, Button } from "@mui/material";

function WeightForm({
  weightInput,
  setWeightInput,
  dateInput,
  setDateInput,
  handleAddWeight,
}) {
  return (
      <form onSubmit={(e) => e.preventDefault()} >
        <TextField
          label="Weight (kg)"
          type="number"
          value={weightInput}
          onChange={(e) => setWeightInput(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Date and Time"
          type="datetime-local"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          variant="contained"
          style={{backgroundColor: '#22e02e', color: 'black'}}
          onClick={handleAddWeight}
          fullWidth
        >
          Add Weight
        </Button>
      </form>
  );
}

export default WeightForm;
