import React, { useState } from 'react';
import { Drawer, Box, TextField, Button, Checkbox, FormControlLabel, Grid, InputLabel, MenuItem, Typography } from '@mui/material';
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
    {field:'Net Salary',headerName:'Net Salary',width:220,renderHeader:()=>(
        <div style={{color:"#838387"}}>Net Salary</div>
    )},
    {field:'Duration',headerName:'Duration',width:300,renderHeader:()=>(
        <div style={{color:"#838387"}}>Duration</div>
    )},
    {field:'Paid On',headerName:'Paid On',width:250,renderHeader:()=>(
        <div style={{color:"#838387"}}>Paid On</div>
    )},
    {field:'Status',headerName:'Status',width:250,renderHeader:()=>(
        <div style={{color:"#838387"}}>Status</div>
    )},
    {field:'Action',headerName:'Action',width:50,renderHeader:()=>(
        <div style={{color:"#838387"}}>Action</div>
    )},
  ];

  const customLocaleText={
    noRowsLabel:'No data available in the table',
  };

  const Years=[];
  for(let i=2000;i<3000;i++){
    Years.push(<MenuItem value={i}>{i}</MenuItem>);
  }

  return (
    <Drawer anchor="right" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { width: '100%' ,background : "#f3f4f8"} }}>
      <Box p={2} role="presentation" sx={{}}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ fontSize: 25, fontWeight: 'bold',mb:3,background: 'white',mt:'-35px',ml:'-20px',mr:'-20px'}}>
            <div style={{display:'flex',paddingLeft:'30px',paddingBottom:'3px',border:'1px solid #aeaeb2',height:'90px'}}>
                <div>
                    <p style={{fontWeight:'bold', fontSize:'35px'}}>Payroll</p>
                </div>
                <div style={{display:'flex', alignItems: 'center',fontSize:'16px',color:'#aeaeb2',marginTop: 40, marginLeft:'10px'}}>
                    <p>Home</p>
                    <FiberManualRecordIcon  sx={{width:'10px',mt:'4px'}}/>
                    <p>Pyroll</p>
                    <FiberManualRecordIcon sx={{width:'10px',mt:'4px'}}/>
                    <p>Pyroll</p>
                </div>
                <div style={{marginLeft:'985px',paddingTop:'38px'}}>
                    <SearchIcon sx={{mr: 2.5}} />
                    <WatchLaterIcon sx={{mr: 2.5}}/>
                    <AddCircleIcon sx={{mr: 2.5}}/>
                    <NotificationsIcon sx={{mr: 2.5}} />
                    <PowerSettingsNewIcon />
                </div>
            </div>
            <Box sx={{mt:2,mb:2}}>
              <Grid container spacing={2} marginX='10px'>
                <Grid item >
                  <Typography paddingTop='3px' sx={{color:'#aeaeb2'}}>Select Year</Typography>
                </Grid>
                <Grid item sx={{borderRight:'1px solid #aeaeb2',height:'60px'}} >
                  <TextField
                    name='year'
                    select
                    value='2024'
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                        
                      },
                      marginTop:-1.7,
                      marginLeft:-2,
                      marginRight:1,
                    }}
                  >
                    {Years}
                  </TextField>
                </Grid>
                <Grid item>
                  <Typography paddingTop='3px' sx={{color:'#aeaeb2'}}>Select Cycle</Typography>
                </Grid>
                <Grid item sx={{borderRight:'1px solid #aeaeb2',height:'60px'}} >
                  <TextField
                    name='cycle'
                    select
                    value='Monthly'
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                        
                      },
                      marginTop:-1.7,
                      marginLeft:-2,
                      marginRight:1,
                    }}
                  >
                      <MenuItem value="Monthly">Montly</MenuItem>
                      <MenuItem value="Yearly">Yearly</MenuItem>
                  </TextField>
                </Grid>
                <Grid item>
                  <Typography paddingTop='3px' sx={{color:'#aeaeb2'}}>Select Month</Typography>
                </Grid>
                <Grid item sx={{borderRight:'1px solid #aeaeb2',height:'60px'}} >
                  <TextField
                    name='month'
                    select
                    value='August'
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                        
                      },
                      marginTop:-1.7,
                      marginLeft:-2,
                      marginRight:1,
                    }}
                  >
                      <MenuItem value="January">January</MenuItem>
                      <MenuItem value="February">February</MenuItem>
                      <MenuItem value="March">March</MenuItem>
                      <MenuItem value="April">April</MenuItem>
                      <MenuItem value="May">May</MenuItem>
                      <MenuItem value="June">June</MenuItem>
                      <MenuItem value="July">July</MenuItem>
                      <MenuItem value="August">August</MenuItem>
                      <MenuItem value="September">September</MenuItem>
                      <MenuItem value="October">October</MenuItem>
                      <MenuItem value="November">November</MenuItem>
                      <MenuItem value="December">December</MenuItem>
                  </TextField>
                </Grid>
                <Grid item sx={{display:'flex',borderRight:'1px solid #aeaeb2',height:'60px',paddingRight:'18px'}}>
                  <div style={{background:'#f3f4f8',marginTop:'-7px',paddingTop:'4px',paddingLeft:'5px',paddingRight:'5px',marginBottom:'6px',color:'#aeaeb2'}}>
                    <SearchIcon />
                  </div>
                  <TextField
                    placeholder='Start typing to search'
                    sx={{
                      '& .MuiInputBase-input': {
                        height: '24px', 
                        padding: '10px', 
                      },
                      marginTop:-0.9
                    }}
                  >

                  </TextField>
                </Grid>
                <Grid item>
                  <Button style={{display:'flex',justifyContent:'space-between',alignItems:'center',color:'#626671',border:'1px solid #626671',marginTop:'-5px'}}><CancelIcon sx={{marginRight:'10px'}}/>Clear</Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box sx={{ background: 'white', paddingX: 3, paddingTop: 4, paddingBottom: 3 ,marginX:3}}>
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
              <Grid item xs={12} mt='10px' mb='16px'>
                <Button type="submit" variant="contained" color="warning" style={{display:'flex', alignItems:'center',justifyContent:'center',marginLeft:'1254px'}} ><SendIcon sx={{width:'20px',transform: 'rotate(-45deg)',mb: 1}}/>Generate</Button>
              </Grid>
            </Grid>
          </Box>
        </form>
        <Box sx={{mt: 3,background:'white',height: 160,mx:3}}>
         <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} localeText={customLocaleText} />
        </Box>
      </Box>
    </Drawer>
  );
}

export default PayrollDrawer;
