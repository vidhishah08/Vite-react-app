import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button , Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Capture from "../assets/Capture.png"

const columns = [
  { field: 'id',headerName:'id', width: 250 ,renderHeader:()=>(
    <img src={Capture} alt="id"/>
  )},
  { field: 'subject', headerName: 'Subject', width: 400 , renderHeader:()=>(
      <div style={{color:'#9aa6b8'}}>Subject</div>
  )},
  { field: 'amount', headerName: 'Amount', width: 620 ,renderHeader:()=>(
    <div style={{color:'#9aa6b8'}}>Amount</div>
  )},
  { field:'action' ,headerName:'Action', width:90 ,renderHeader:()=>(
    <div style={{color:'#9aa6b8'}}>Action</div>
  )},
];

const customLocaleText={
  noRowsLabel:'No data available in the table',
};

const rows = [
  
];

function ContractTable({ onAddClick,onAddProjectClick }) {
  return (
    <Box  mx={10} my={-40}>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="warning"
          startIcon={<AddIcon />}
          onClick={onAddClick}
        >
          Add Contract Template
        </Button>
        <Button
          variant="contained"
          color="warning"
          startIcon={<AddIcon />}
          onClick={onAddProjectClick}
        >
          Add Project
        </Button>
      </Stack>
      <Box mt={5} style={{ height: 160, width: 1370 }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} localeText={customLocaleText}/>
      </Box>
    </Box>
  );
}

export default ContractTable;


