import { Box, Drawer, Typography,Grid, TextField, MenuItem, Button } from "@mui/material";
import React from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SearchIcon from '@mui/icons-material/Search';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Capture from "../assets/Capture.png"
import Capture1 from '../assets/Capture1.png';
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';

const columns = [
    { field: 'id',headerName:'id', width: 40 ,renderHeader:()=>(
      <img src={Capture} alt="id"/>
    )},
    { field: 'subject', headerName: 'Tickets', width: 150 , renderHeader:()=>(
        <div style={{color:'#9aa6b8'}}>Tickets #</div>
    )},
    { field: 'Subject', headerName: 'Tickets Subject', width: 250 ,renderHeader:()=>(
      <div style={{color:'#9aa6b8'}}>Tickets Subject</div>
    )},
    { field:'Name' ,headerName:'Requester Name', width:300 ,renderHeader:()=>(
      <div style={{color:'#9aa6b8'}}>Requester Name</div>
    )},
    { field:'On' ,headerName:'Requested On', width:250 ,renderHeader:()=>(
        <div style={{color:'#9aa6b8'}}>Requested On</div>
    )},
    { field:'Others' ,headerName:'Others', width:90 ,renderHeader:()=>(
        <div style={{color:'#9aa6b8'}}>Others</div>
    )},
    { field:'Status' ,headerName:'Status', width:145 ,renderHeader:()=>(
        <div style={{color:'#9aa6b8'}}>Status</div>
    )},
    { field:'Action' ,headerName:'Action', width:70 ,renderHeader:()=>(
        <div style={{color:'#9aa6b8'}}>Action</div>
    )},
  ];
  
  const customLocaleText={
    noRowsLabel:'No data available in the table',
  };
  
  const rows = [
    
  ];

  

function Dashboard1({open,onClose}){
    const theme = useTheme();
    return(
        <Drawer anchor="right" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { width: '88%' ,background : "#f3f4f8",height:'100%',[theme.breakpoints.down('md')]: {width: '100%'},}}}>
            <Box  role="presentation">
                <Box sx={{background:'white',paddingX:2,paddingY:2,display:'flex',alignItems:'center',borderBottom:'1px solid #f3f4f8',[theme.breakpoints.down('sm')]: {flexDirection: 'column',alignItems: 'flex-start'},}}>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <Typography sx={{fontSize:'30px',fontWeight:'bold',mr:1.3,[theme.breakpoints.down('md')]:{fontSize:'25px',mt:0.3}}}>Tickets</Typography>
                        <Typography sx={{fontSize:'20px',fontWeight:'medium',color:'#aeaeb2',paddingTop:'6px',[theme.breakpoints.down('md')]:{fontSize:'12px'}}}>Home</Typography>
                        <FiberManualRecordIcon sx={{color:'#aeaeb2',width:'8px',paddingTop:1,paddingX:0.5}}/>
                        <Typography sx={{fontSize:'20px',fontWeight:'medium',color:'#aeaeb2',paddingTop:'6px',[theme.breakpoints.down('md')]:{fontSize:'12px'}}}>Tickets</Typography>
                    </Box>  
                    <Box sx={{display:'flex',alignItems:'center',ml:'auto',color:'#606f84',}}>
                        <SearchIcon sx={{mr:1.2,[theme.breakpoints.down('md')]:{fontSize:'18px'}}}/>
                        <WatchLaterIcon sx={{mr:1.2,[theme.breakpoints.down('md')]:{fontSize:'18px'}}}/>
                        <AddCircleIcon sx={{mr:1.2,[theme.breakpoints.down('md')]:{fontSize:'18px'}}}/>
                        <NotificationsIcon sx={{mr:1.2,[theme.breakpoints.down('md')]:{fontSize:'18px'}}}/>
                        <PowerSettingsNewIcon sx={{mr:1.2,[theme.breakpoints.down('md')]:{fontSize:'18px'}}}/>
                    </Box> 
                    
                </Box>
                <Box sx={{background:'white',padding:1,borderBottom:'1px solid #f3f4f8',[theme.breakpoints.down('sm')]: {padding: 0},}}>
                    <Grid container sx={{mt:-1,mb:-1,ml:1.3,[theme.breakpoints.down('sm')]: {flexDirection: 'col',alignItems: 'flex-start'},}}>
                        <Grid item sx={{display:'flex',alignItems:'center',borderRight:'1px solid #f3f4f8',[theme.breakpoints.down('md')]:{width:'220px'}}}>
                            <Typography sx={{fontSize:'18px',color:'#606f84',[theme.breakpoints.down('md')]:{fontSize:'15px',fontWeight:'bold'}}}>Duration</Typography>
                            <TextField placeholder="Start Date to End Date" sx={{'& .MuiOutlinedInput-notchedOutline': { border: 'none'},'input::placeholder':{color:'#606f84',fontWeight:'bold',fontSize:'15px',[theme.breakpoints.down('md')]:{fontSize:'12px',marginRight:'-12px'}}}}/>
                        </Grid>
                        <Grid item sx={{display:'flex',alignItems:'center',borderRight:'1px solid #f3f4f8',paddingX:1,[theme.breakpoints.down('md')]:{width:'180px'}}}>
                            <Typography sx={{fontSize:'18px',color:'#606f84',[theme.breakpoints.down('md')]:{fontSize:'15px',fontWeight:'bold'}}}>Status</Typography>
                            <TextField name="status" select defaultValue='Open Tickets' sx={{'& .MuiOutlinedInput-notchedOutline': { border: 'none'},'& .MuiSelect-select':{color:'black',fontWeight:'bold',[theme.breakpoints.down('md')]:{fontSize:'12px'}},'& .MuiSelect-icon':{color:'black',ml:-1}}} >
                                <MenuItem value='Open Tickets' sx={{color:'#aeaeb2'}}>Open Tickets</MenuItem>
                                <MenuItem value='Close Tickets' sx={{color:'#aeaeb2'}}>Close Tickets</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item sx={{display:'flex',alignItems:'center',borderRight:'1px solid #f3f4f8',paddingX:1}}>
                            <div style={{background:'#f3f4f8',paddingTop:'6px',paddingLeft:'5px',paddingRight:'5px',color:'#aeaeb2'}}>
                                <SearchIcon />
                            </div>
                            <TextField placeholder='Start typing to search' sx={{'& .MuiInputBase-input': {padding: '6px'},}}/>
                        </Grid>
                        <Grid item sx={{display:'flex',alignItems:'center',paddingX:1,borderLeft:'1px solid #f3f4f8',ml:52,[theme.breakpoints.down('md')]: { ml: 0 }}}>
                            <Button style={{display:'flex',alignItems:'center',color:'#606f84',fontWeight:'bold'}}><FilterAltIcon sx={{mr:2}}/>Filters</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{mt:3.5,mx:2,[theme.breakpoints.down('sm')]: {mt: 2,mx: 1}}}>
                    <Grid container spacing={2} sx={{[theme.breakpoints.down('sm')]: {flexDirection: 'column',alignItems: 'flex-start'}}}>
                        <Grid item xs={2.4}>
                            <Box sx={{paddingX:2.5,paddingY:2.5,background:'white'}}>
                                <Typography sx={{color:'#616e7f',fontWeight:'bold',mr:0.5,[theme.breakpoints.down('md')]:{fontSize:'13px'}}}>Total Tickets</Typography>
                                <img src={Capture1} style={{marginLeft:'170px',marginTop:'-10px'}}/>
                                <Typography sx={{color:'#ff9000',fontWeight:'bold',mt:-2,ml:0.2}}>0</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2.4}>
                            <Box sx={{paddingX:2.5,paddingY:2.5,background:'white'}}>
                                <Typography sx={{color:'#616e7f',fontWeight:'bold',mr:0.5,[theme.breakpoints.down('md')]:{fontSize:'13px'}}}>Closed Tickets</Typography>
                                <img src={Capture1} style={{marginLeft:'170px',marginTop:'-10px'}}/>
                                <Typography sx={{color:'#ff9000',fontWeight:'bold',mt:-2,ml:0.2}}>0</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2.4}>
                            <Box sx={{paddingX:2.5,paddingY:2.5,background:'white'}}>
                                <Typography sx={{color:'#616e7f',fontWeight:'bold',mr:0.5,[theme.breakpoints.down('md')]:{fontSize:'13px'}}}>Open Tickets</Typography>
                                <img src={Capture1} style={{marginLeft:'170px',marginTop:'-10px'}}/>
                                <Typography sx={{color:'#ff9000',fontWeight:'bold',mt:-2,ml:0.2}}>0</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2.4}>
                            <Box sx={{paddingX:2.5,paddingY:2.5,background:'white'}}>
                                <Typography sx={{color:'#616e7f',fontWeight:'bold',mr:0.5,[theme.breakpoints.down('md')]:{fontSize:'13px'}}}>Pending Tickets</Typography>
                                <img src={Capture1} style={{marginLeft:'170px',marginTop:'-10px'}}/>
                                <Typography sx={{color:'#ff9000',fontWeight:'bold',mt:-2,ml:0.2}}>0</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2.4}>
                            <Box sx={{paddingX:2.5,paddingY:2.5,background:'white'}}>
                                <Typography sx={{color:'#616e7f',fontWeight:'bold',mr:0.5,[theme.breakpoints.down('md')]:{fontSize:'13px',ml:-1}}}>Resolved Tickets</Typography>
                                <img src={Capture1} style={{marginLeft:'170px',marginTop:'-10px','@media (max-width:600px)':{position:'absolute',top:'10px',right:'10px',marginLeft:'0px'}}}/>
                                <Typography sx={{color:'#ff9000',fontWeight:'bold',mt:-2,ml:0.2}}>0</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{mt:3,mx:2}}>
                    <Grid container spacing={2} sx={{[theme.breakpoints.down('sm')]: {flexDirection: 'column',alignItems: 'flex-start'}}}>
                        <Grid item>
                            <button style={{display:'flex',alignItems:'center',background:'#ff9000',color:'white'}}><AddIcon sx={{mr:0.7}}/>Create Ticket</button>
                        </Grid>
                        <Grid item>
                            <button style={{display:'flex',alignItems:'center',border:'1px solid #aeaeb2',background:'white',color:'#616e7f'}}><CreateIcon sx={{mr:0.7}}/> Ticket Form</button>
                        </Grid>
                        <Grid item>
                            <button style={{display:'flex',alignItems:'center',border:'1px solid #aeaeb2',background:'white',color:'#616e7f'}}><ExitToAppIcon sx={{mr:0.7}}/> Export</button>
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={5} mx={2} sx={{background:'white',height: 160,[theme.breakpoints.down('md')]: {mt:2}}}>
                    <DataGrid rows={rows} columns={columns} pageSize={5} localeText={customLocaleText}/>
                </Box>
            </Box>
        </Drawer>
    )
}

export default Dashboard1;