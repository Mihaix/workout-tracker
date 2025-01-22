import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../constants";
import WeightForm from "../Forms/WeightForm";
import WeightDataGrid from "../DataTables/WeightDataGrid";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function WeightTracker() {
  const [weights, setWeights] = useState([]);
  const [weightInput, setWeightInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  useEffect(() => {
    fetchWeights();
  }, []);

  const fetchWeights = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/Weights`);
      setWeights(response.data);
    } catch (error) {
      console.error("Error fetching weights:", error);
    }
  };

  const handleAddWeight = async () => {
    if (!weightInput || !dateInput) return;
    try {
      const response = await axios.post(`${BASE_URL}/Weights`, {
        CurrentWeight: parseFloat(weightInput),
        WeightDate: dateInput,
      });
      setWeights([...weights, response.data]);
      setWeightInput("");
      setDateInput("");
    } catch (error) {
      console.error("Error adding weight:", error);
    }
  };

  const handleDeleteWeight = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/Weights/${id}`);
      fetchWeights();
    } catch (error) {
      console.error("Error deleting weight:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const chartData = {
    labels: weights.map((weight) => formatDate(weight.weightDate)),
    datasets: [
      {
        label: "Weight Progress",
        data: weights.map((weight) => weight.currentWeight),
        fill: false,
        borderColor: "#22e02e",
        tension: 0.2,
      },
    ],
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
      <Typography variant="h4">Weight Tracker</Typography>

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
        <WeightForm
          weightInput={weightInput}
          setWeightInput={setWeightInput}
          dateInput={dateInput}
          setDateInput={setDateInput}
          handleAddWeight={handleAddWeight}
        />

        <WeightDataGrid weights={weights} handleDeleteWeight={handleDeleteWeight} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px"
        }}
      >
        <div style={{ width: "1300px", height: "700px" }}>
          <Line data={chartData} />
        </div>
      </Box>
    </Box>
  );
}

export default WeightTracker;
