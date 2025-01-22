import React from "react";
import { TextField, Button } from "@mui/material";

function WorkoutForm({
  workoutTypeInput,
  setWorkoutTypeInput,
  exerciseInput,
  setExerciseInput,
  setsInput,
  setSetsInput,
  repsInput,
  setRepsInput,
  weightInput,
  setWeightInput,
  intensityDurationInput,
  setIntensityDurationInput,
  notesInput,
  setNotesInput,
  dateInput,
  setDateInput,
  handleAddWorkout,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <TextField
        label="Workout Type"
        value={workoutTypeInput}
        onChange={(e) => setWorkoutTypeInput(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Exercise"
        value={exerciseInput}
        onChange={(e) => setExerciseInput(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Sets"
        type="number"
        value={setsInput}
        onChange={(e) => setSetsInput(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Reps"
        value={repsInput}
        onChange={(e) => setRepsInput(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Weight (kg)"
        type="number"
        value={weightInput}
        onChange={(e) => setWeightInput(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Intensity/Duration"
        value={intensityDurationInput}
        onChange={(e) => setIntensityDurationInput(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Notes"
        value={notesInput}
        onChange={(e) => setNotesInput(e.target.value)}
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
        style={{ backgroundColor: "#22e02e", color: "black" }}
        onClick={handleAddWorkout}
        fullWidth
      >
        Add Workout
      </Button>
    </form>
  );
}

export default WorkoutForm;
