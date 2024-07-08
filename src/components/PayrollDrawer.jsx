import React, { useState } from 'react';
import { Drawer, Box, TextField, Button, Checkbox, FormControlLabel, Grid, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SendIcon from '@mui/icons-material/Send';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { DataGrid } from '@mui/x-data-grid';
import Capture from '../assets/Capture.png';
import CancelIcon from '@mui/icons-material/Cancel';

function PayrollDrawer({ open, onClose }) {
  const initialValues = {
    includeExpenseClaims: false,
    useAttendance: false,
    addTimelogsToSalary: false,
    markAbsentDaysAsUnpaid: false,
    markApprovedLeavesAsPaid: false,
  };

  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setValues({
      ...values,
      [name]: checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  const rows = [
  ];

  const columns = [
    { field: 'id',headerName:'id', width: 50 ,renderHeader:()=>(
        <img src={Capture} alt="id"/>
      )},
    {field:'Name',headerName:'Name',width:300,renderHeader:()=>(
        <div style={{color:"#838387"}}>Name</div>
    )},
    {field:'Net Salary',headerName:'Net Salary',width:230,renderHeader:()=>(
        <div style={{color:"#838387"}}>Net Salary</div>
    )},
    {field:'Duration',headerName:'Duration',width:290,renderHeader:()=>(
        <div style={{color:"#838387"}}>Duration</div>
    )},
    {field:'Paid On',headerName:'Paid On',width:250,renderHeader:()=>(
        <div style={{color:"#838387"}}>Paid On</div>
    )},
    {field:'Status',headerName:'Status',width:250,renderHeader:()=>(
        <div style={{color:"#838387"}}>Status</div>
    )},
    {field:'Action',headerName:'Action',width:100,renderHeader:()=>(
        <div style={{color:"#838387"}}>Action</div>
    )},
  ];

  const customLocaleText={
    noRowsLabel:'No data available in the table',
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { width: '100%' ,background : "#cecfd2"} }}>
      <Box p={2} role="presentation" sx={{}}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ fontSize: 25, fontWeight: 'bold',mb:3,background: 'white',mt:'-35px',ml:'-20px',mr:'-20px'}}>
            <div style={{display:'flex',paddingLeft:'30px',paddingBottom:'3px',border:'1px solid #aeaeb2',height:'90px'}}>
                <div>
                    <p style={{fontWeight:'bold', fontSize:'35px'}}>Pyroll</p>
                </div>
                <div style={{display:'flex', alignItems: 'center',fontSize:'16px',color:'#aeaeb2',marginTop: 40, marginLeft:'10px'}}>
                    <p>Home</p>
                    <FiberManualRecordIcon  sx={{width:'10px',mt:'4px'}}/>
                    <p>Pyroll</p>
                    <FiberManualRecordIcon sx={{width:'10px',mt:'4px'}}/>
                    <p>Pyroll</p>
                </div>
                <div style={{marginLeft:'1000px',paddingTop:'38px'}}>
                    <SearchIcon sx={{mr: 3}} />
                    <WatchLaterIcon sx={{mr: 3}}/>
                    <AddCircleIcon sx={{mr: 3}}/>
                    <NotificationsIcon sx={{mr: 3}} />
                    <PowerSettingsNewIcon />
                </div>
            </div>
            <div style={{display:'flex', alignItems:'center',paddingLeft:'30px',paddingBottom:'10px',height:'80px'}}>
              <div style={{borderRight:'1px solid #aeaeb2',display:'flex',alignItems:'center',paddingRight:'20px',paddingTop:'15px',paddingBottom:'10px'}}>
              <InputLabel sx={{marginRight:2}}>Select Year</InputLabel>
              <Select style={{width:'100px'}}>
                <MenuItem value="2023">2023</MenuItem>
                <MenuItem value="2024">2024</MenuItem>
              </Select>
              </div>
              <div style={{borderRight:'1px solid #aeaeb2',display:'flex',alignItems:'center',paddingRight:'20px',paddingTop:'15px',paddingBottom:'10px',paddingLeft:'15px'}}>
              <InputLabel sx={{marginRight:2}}>Select Cycle</InputLabel>
              <Select style={{width:'100px'}}>
                <MenuItem value="June">Year</MenuItem>
                <MenuItem value="August">Month</MenuItem>
              </Select>
              </div>
              <div style={{borderRight:'1px solid #aeaeb2',display:'flex',alignItems:'center',paddingRight:'20px',paddingTop:'15px',paddingBottom:'10px',paddingLeft:'15px'}}>
              <InputLabel sx={{marginRight:2}}>Select Month</InputLabel>
              <Select style={{width:'100px'}}>
                <MenuItem value="June">June</MenuItem>
                <MenuItem value="August">August</MenuItem>
              </Select>
              </div>
              <div style={{display:'flex',alignItems:'center',marginLeft:'20px',borderRight:'1px solid #aeaeb2',paddingRight:'20px',paddingTop:'15px',paddingBottom:'10px',paddingLeft:'15px'}}>
                <div style={{display:'flex',alignItems:'center'}}>
                  <div style={{background:'#aeaeb2'}}><SearchIcon sx={{paddingTop:'10px',paddingX:'10px'}}/></div>
                  <TextField placeholder='Start Typing to Search'></TextField>
                </div>
              </div>
              <Button style={{display:'flex',alignItems:'center',color:'black',border:'1px solid black',marginLeft:'30px'}}><CancelIcon />Claer</Button>
            </div>
          </Box>
          <Box sx={{ background: 'white', paddingX: 3, paddingTop: 4, paddingBottom: 3 }}>
            <InputLabel sx={{fontSize:'36px', fontWeight:'bold',color:'black'}}>Generate Payroll</InputLabel>
            <hr style={{border:'1px solid #aeaeb2 ',marginTop:'20px'}}/>
            <Grid container spacing={2} sx={{ mt: '30px' }}>
              <Grid item xs={4}>
                <FormControlLabel
                  control={<Checkbox checked={values.includeExpenseClaims} onChange={handleChange} name="includeExpenseClaims" />}
                  label="Include Expense Claims"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={<Checkbox checked={values.useAttendance} onChange={handleChange} name="useAttendance" />}
                  label="Add Timelogs to Salary"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={<Checkbox checked={values.addTimelogsToSalary} onChange={handleChange} name="addTimelogsToSalary" />}
                  label="Use Attendance "
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={<Checkbox checked={values.markAbsentDaysAsUnpaid} onChange={handleChange} name="markAbsentDaysAsUnpaid" />}
                  label="Mark Approved Leaves as Paid"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={<Checkbox checked={values.markApprovedLeavesAsPaid} onChange={handleChange} name="markApprovedLeavesAsPaid" />}
                  label="Mark Absent Days as Unpaid"
                />
              </Grid>
              <Grid item xs={12}>
                <hr style={{border:'1px solid #aeaeb2 ' ,marginTop:'30px'}} />
              </Grid>
              <Grid item xs={12} mt='10px' mb='30px'>
                <Button type="submit" variant="contained" color="warning" style={{display:'flex', alignItems:'center',justifyContent:'center',marginLeft:'1308px'}} ><SendIcon sx={{width:'20px',transform: 'rotate(-45deg)',mb: 1}}/>Generate</Button>
              </Grid>
            </Grid>
          </Box>
        </form>
        <Box sx={{mt: 3,background:'white',height: 160}}>
         <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} localeText={customLocaleText} />
        </Box>
      </Box>
    </Drawer>
  );
}

export default PayrollDrawer;
