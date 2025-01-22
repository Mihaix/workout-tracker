import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

function WeightDataGrid({ weights, handleDeleteWeight }) {
  const columns = [
    { field: "weightId", headerName: "ID", width: 10 },
    {
      field: "currentWeight",
      headerName: "Weight (kg)",
      width: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "weightDate",
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <DeleteIcon
            style={{ cursor: "pointer", color: "red", fontSize: 30 }}
            onClick={() => handleDeleteWeight(params.row.weightId)}
          />
        </div>
      ),
    },
  ];

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={weights}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row.weightId}
        disableColumnMenu
        disableColumnResize
        showCellVerticalBorder
        
      />
    </div>
  );
}

export default WeightDataGrid;
