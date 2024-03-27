import { useState } from "react";
import { Box, TextField, type BoxProps } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

type TagsTableProps = {
  tags: {
    id: string;
    content: string;
    count: number;
  }[];
  options?: {
    contentColumnWidth?: number;
    countColumnWidth?: number;
  };
  sx?: BoxProps["sx"];
};

function TagsTable(props: TagsTableProps) {
  const columns: GridColDef[] = [
    {
      field: "content",
      headerName: "Tag",
      width: props.options?.contentColumnWidth || 350,
    },
    {
      field: "count",
      headerName: "Count",
      width: props.options?.countColumnWidth || 350,
    },
  ];

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  function handlePageSizeChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const pageSize = Number(e.target.value);
    if (pageSize <= 0) {
      setPaginationModel({ ...paginationModel, pageSize: 1 });
      return;
    }
    // Maximum page size is 100 due to MUI MIT license limitations.
    if (pageSize > 100) {
      setPaginationModel({ ...paginationModel, pageSize: 100 });
      return;
    }
    setPaginationModel({ ...paginationModel, pageSize: pageSize });
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        width: "100%",
        ...props.sx
      }}
    >
      <TextField
        sx={{
          maxWidth: 200,
          alignSelf: "flex-end",
        }}
        label="Tags per page"
        aria-label="Tags per page"
        type="number"
        value={paginationModel.pageSize}
        onChange={(e) => handlePageSizeChange(e)}
      />

      <Box
        sx={{
          width: "100%",
          height: "auto",
        }}
      >
        <DataGrid
          rows={props.tags}
          columns={columns}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          disableRowSelectionOnClick
          autoHeight
          pageSizeOptions={[]}
        />
      </Box>
    </Box>
  );
}

export default TagsTable;
