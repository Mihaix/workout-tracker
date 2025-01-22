import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../constants";
import WorkoutForm from "../Forms/WorkoutForm";
import WorkoutDataGrid from "../DataTables/WorkoutDataGrid";

function WorkoutTracker() {
  const [workouts, setWorkouts] = useState([]);
  const [workoutTypeInput, setWorkoutTypeInput] = useState("");
  const [exerciseInput, setExerciseInput] = useState("");
  const [setsInput, setSetsInput] = useState("");
  const [repsInput, setRepsInput] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const [intensityDurationInput, setIntensityDurationInput] = useState("");
  const [notesInput, setNotesInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/Workouts`);
      setWorkouts(response.data);
    } catch (error) {
      console.error("Error fetching workouts:", error);
    }
  };

  const handleAddWorkout = async () => {
    if (!workoutTypeInput || !exerciseInput || !setsInput || !repsInput || !dateInput) return;
    try {
      const response = await axios.post(`${BASE_URL}/Workouts`, {
        WorkoutType: workoutTypeInput,
        Exercise: exerciseInput,
        Sets: parseInt(setsInput),
        Reps: repsInput,
        Weight: weightInput,
        IntensityDuration: intensityDurationInput,
        Notes: notesInput,
        Date: dateInput,
      });
      setWorkouts([...workouts, response.data]);
      setWorkoutTypeInput("");
      setExerciseInput("");
      setSetsInput("");
      setRepsInput("");
      setWeightInput("");
      setIntensityDurationInput("");
      setNotesInput("");
      setDateInput("");
    } catch (error) {
      console.error("Error adding workout:", error);
    }
  };

  const handleDeleteWorkout = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/Workouts/${id}`);
      fetchWorkouts();
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  const handleUpdateWorkout = async (id, updatedWorkout) => {
    try {
      await axios.put(`${BASE_URL}/Workouts/${id}`, updatedWorkout);
      fetchWorkouts();
    } catch (error) {
      console.error("Error updating workout:", error);
    }
  };

  return (
    <Box
      sx={{
        width: "92%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "0px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <Typography variant="h4">Workout Tracker</Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "70px",
        }}
      >
        <WorkoutForm
          workoutTypeInput={workoutTypeInput}
          setWorkoutTypeInput={setWorkoutTypeInput}
          exerciseInput={exerciseInput}
          setExerciseInput={setExerciseInput}
          setsInput={setsInput}
          setSetsInput={setSetsInput}
          repsInput={repsInput}
          setRepsInput={setRepsInput}
          weightInput={weightInput}
          setWeightInput={setWeightInput}
          intensityDurationInput={intensityDurationInput}
          setIntensityDurationInput={setIntensityDurationInput}
          notesInput={notesInput}
          setNotesInput={setNotesInput}
          dateInput={dateInput}
          setDateInput={setDateInput}
          handleAddWorkout={handleAddWorkout}
        />

        <WorkoutDataGrid
          workouts={workouts}
          handleDeleteWorkout={handleDeleteWorkout}
          handleUpdateWorkout={handleUpdateWorkout}
        />
      </Box>
    </Box>
  );
}

export default WorkoutTracker;
