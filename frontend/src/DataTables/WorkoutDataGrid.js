import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

function WorkoutDataGrid({ workouts, handleDeleteWorkout, handleUpdateWorkout }) {
  const [editRowId, setEditRowId] = useState(null);
  const [editedValues, setEditedValues] = useState({});

  const columns = [
    {
      field: "workoutId",
      headerName: "ID",
      width: 10,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "workoutType",
      headerName: "Workout Type",
      width: 110,
      align: "center",
      headerAlign: "center",
      editable: true,
    },
    {
      field: "exercise",
      headerName: "Exercise",
      width: 100,
      align: "center",
      headerAlign: "center",
      editable: true,
    },
    {
      field: "sets",
      headerName: "Sets",
      width: 80,
      align: "center",
      headerAlign: "center",
      editable: true,
    },
    {
      field: "reps",
      headerName: "Reps",
      width: 100,
      align: "center",
      headerAlign: "center",
      editable: true,
    },
    {
      field: "weight",
      headerName: "Weight (kg)",
      width: 120,
      align: "center",
      headerAlign: "center",
      editable: true,
    },
    {
      field: "intensityDuration",
      headerName: "Intensity/Duration",
      align: "center",
      headerAlign: "center",
      width: 150,
      editable: true,
    },
    {
      field: "notes",
      headerName: "Notes",
      width: 150,
      align: "center",
      headerAlign: "center",
      editable: true,
    },
    {
      field: "date",
      headerName: "Date & Time",
      align: "center",
      headerAlign: "center",
      width: 200,
      renderCell: (params) => {
        const date = new Date(params.value);
        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "long" });
        const year = date.getFullYear();
        const timeString = date.toLocaleTimeString("default", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        return `${day} ${month} ${year}, ${timeString}`;
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      align: "center",
      headerAlign: "center",
      width: 100,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
          {editRowId === params.row.workoutId ? (
            <>
              <SaveIcon
                style={{ cursor: "pointer", color: "green", fontSize: 30, marginRight: 10 }}
                onClick={() => handleSaveEdit(params.row)}
              />
              <DeleteIcon
                style={{ cursor: "pointer", color: "red", fontSize: 30 }}
                onClick={() => handleDeleteWorkout(params.row.workoutId)}
              />
            </>
          ) : (
            <>
              <EditIcon
                style={{ cursor: "pointer", color: "blue", fontSize: 30, marginRight: 10 }}
                onClick={() => handleEdit(params.row.workoutId)}
              />
              <DeleteIcon
                style={{ cursor: "pointer", color: "red", fontSize: 30 }}
                onClick={() => handleDeleteWorkout(params.row.workoutId)}
              />
            </>
          )}
        </div>
      ),
      
    },
  ];

  const handleEdit = (rowId) => {
    setEditRowId(rowId);
  };

  const handleSaveEdit = (updatedRow) => {
    setEditRowId(null);
    const updatedValues = { ...updatedRow, ...editedValues };
    handleUpdateWorkout(updatedRow.workoutId, updatedValues);
    setEditedValues({});
  };

  return (
    <div className="datagrid-container">
      <DataGrid
        rows={workouts}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row.workoutId}
        disableColumnMenu
        disableColumnResize
        showCellVerticalBorder
        isCellEditable={(params) => editRowId === params.id}
        onCellValueChange={(params, event) => {
          const { id, field, value } = event.target;
          setEditedValues({ ...editedValues, [id]: { ...editedValues[id], [field]: value } });
        }}
      />
    </div>
  );
}

export default WorkoutDataGrid;
