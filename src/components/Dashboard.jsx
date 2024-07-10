import React from "react";
import { Box, Button, Drawer, Grid, Typography } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SearchIcon from '@mui/icons-material/Search';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import RectangleIcon from '@mui/icons-material/Rectangle';
import HelpIcon from '@mui/icons-material/Help';
import Capture1 from '../assets/Capture1.png';
import Capture2 from '../assets/Capture2.png';
import Capture3 from "../assets/Capture3.png";
import Capture4 from "../assets/Capture4.png";
import Capture5 from "../assets/Capture5.png";
import { DataGrid } from "@mui/x-data-grid";

const columns=[
    {field:'job',headerName:'Job',width:250,renderHeader:()=>(<div style={{color:'#aeaeb2',paddingLeft:'50px'}}>Job</div>)},
    {field:'applied',headerName:'applied',width:230,renderHeader:()=>(<div style={{color:'#aeaeb2',paddingLeft:'30px'}}>Applied</div>)},
    {field:'phoneScreen',headerName:'Phone Screen',width:200,renderHeader:()=>(<div style={{color:'#aeaeb2',paddingLeft:'50px'}}>Phone screen</div>)},
    {field:'interview',headerName:'Interview',width:200,renderHeader:()=>(<div style={{color:'#aeaeb2',paddingLeft:'50px'}}>Interview</div>)},
    {field:'hired',headerName:'Hired',width:200,renderHeader:()=>(<div style={{color:'#aeaeb2',paddingLeft:'50px'}}>Hired</div>)},
    {field:'rejected',headerName:'Rejected',width:200,renderHeader:()=>(<div style={{color:'#aeaeb2',paddingLeft:'50px'}}>Rejected</div>)},
]

const data=[
    {id:1,job:'Search Engine Opimization',applied:'65 Candiadates',phoneScreen:'',interview:'',hired:'',rejected:''},
    {id:2,job:'Web Development',applied:'70 Candiadates',phoneScreen:'',interview:'',hired:'',rejected:''},
    {id:3,job:'Content Writing',applied:'35 Candiadates',phoneScreen:'',interview:'',hired:'',rejected:''},
    {id:4,job:'Social Media Manager',applied:'14 Candiadates',phoneScreen:'',interview:'',hired:'',rejected:''},
    {id:5,job:'Graphic Designer',applied:'36 Candiadates',phoneScreen:'',interview:'',hired:'',rejected:''},
    {id:6,job:'Administration Assistance',applied:'11 Candiadates',phoneScreen:'',interview:'',hired:'',rejected:''},
    {id:7,job:'Accounting',applied:'8 Candiadates',phoneScreen:'',interview:'',hired:'',rejected:''}


]

function Dashboard({open,onClose}){
    
    return(
        <Drawer anchor="right" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { width: '90%' ,background : "#f3f4f8"} }}>
            <Box p={2} role="presentation">
                <Box sx={{background:'white',display:'flex',alignItems:'center',mt:-2,mx:-2,paddingX:3,paddingY:2}}>
                    <Typography sx={{fontSize:'26px',fontWeight:'bold'}}>Dashboard</Typography>
                    <Typography sx={{fontSize:'16px',fontWeight:'medium',paddingTop:0.8,ml:1.5,color:'#aeaeb2'}}>Home</Typography>
                    <FiberManualRecordIcon sx={{color:'#aeaeb2',width:'8px',paddingTop:1,paddingX:0.5}}/>
                    <Typography sx={{fontSize:'16px',fontWeight:'medium',paddingTop:0.8,color:'#aeaeb2'}}>Dashboard</Typography>
                    <SearchIcon sx={{ml:108.2,mr:2,color:'#616e7f'}}/>
                    <WatchLaterIcon sx={{mr:2,color:'#616e7f'}}/>
                    <AddCircleIcon sx={{mr:2,color:'#616e7f'}}/>
                    <NotificationsIcon sx={{mr:2,color:'#616e7f'}}/>
                    <PowerSettingsNewIcon sx={{mr:2,color:'#616e7f'}}/>
                </Box>
                <Box sx={{mt:6}}>
                    <Grid container spacing={4} >
                        <Grid item xs={3}>
                            <Box sx={{paddingX:2.5,paddingY:2.5,background:'white'}}>
                                <Box sx={{display:'flex',alignItems:'center'}}>
                                    <Typography sx={{color:'#616e7f',fontWeight:'bold',mr:0.5}}>Total Openings</Typography>
                                    <HelpIcon sx={{color:'#616e7f',width:'18px',mt:-0.2}}/>
                                </Box>
                                <img src={Capture1} style={{marginLeft:'230px'}}/>
                                <Typography sx={{color:'#ff9000',fontWeight:'bold',mt:-2,ml:0.2}}>6</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{paddingX:2.5,paddingY:2.5,background:'white'}}>
                                <Typography sx={{color:'#616e7f',fontWeight:'bold',mr:0.5}}>Total Applications</Typography>
                                <img src={Capture1} style={{marginLeft:'230px'}}/>
                                <Typography sx={{color:'#ff9000',fontWeight:'bold',mt:-2,ml:0.2}}>431</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{paddingX:2.5,paddingY:2.5,background:'white'}}>
                                <Typography sx={{color:'#616e7f',fontWeight:'bold',mr:0.5}}>Total Hired</Typography>
                                <img src={Capture1} style={{marginLeft:'230px'}}/>
                                <Typography sx={{color:'#ff9000',fontWeight:'bold',mt:-2,ml:0.2}}>0</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{paddingX:2.5,paddingY:2.5,background:'white'}}>
                                <Typography sx={{color:'#616e7f',fontWeight:'bold',mr:0.5}}>Total Rejected</Typography>
                                <img src={Capture1} style={{marginLeft:'230px'}}/>
                                <Typography sx={{color:'#ff9000',fontWeight:'bold',mt:-2,ml:0.2}}>0</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{paddingX:2.5,paddingY:2.5,background:'white'}}>
                                <Box sx={{display:'flex',alignItems:'center'}}>
                                    <Typography sx={{color:'#616e7f',fontWeight:'bold',mr:0.5}}>New Applications</Typography>
                                    <HelpIcon sx={{color:'#616e7f',width:'18px',mt:-0.2}}/>
                                </Box>
                                <img src={Capture1} style={{marginLeft:'230px'}}/>
                                <Typography sx={{color:'#ff9000',fontWeight:'bold',mt:-1.5,ml:0.2}}>0</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{paddingX:2.5,paddingY:2.5,background:'white'}}>
                                <Typography sx={{color:'#616e7f',fontWeight:'bold',mr:0.5}}>Shortlisted Candidates</Typography>
                                <img src={Capture1} style={{marginLeft:'230px'}}/>
                                <Typography sx={{color:'#ff9000',fontWeight:'bold',mt:-1.5,ml:0.2}}>0</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{paddingX:2.5,paddingY:2.5,background:'white'}}>
                                <Typography sx={{color:'#616e7f',fontWeight:'bold',mr:0.5}}>Today's Interview</Typography>
                                <img src={Capture1} style={{marginLeft:'230px'}}/>
                                <Typography sx={{color:'#ff9000',fontWeight:'bold',mt:-1.5,ml:0.2}}>0</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{mt:6,background:'white',paddingX:3,paddingY:3}}>
                    <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>Total Applications</Typography>
                    <DataGrid rows={data} columns={columns} pageSize={5}></DataGrid>
                </Box>
                <Box sx={{mt:6}}>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <Box sx={{background:'white',height:'460px',paddingX:3,paddingY:3}}>
                               <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>Today's Interview</Typography> 
                               <img src={Capture2} style={{marginLeft:'270px',marginTop:'40px',width:'50px',color:'#616e7f'}}/>
                               <Typography sx={{color:'#616e7f',ml:28}}>-No Record Found-</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{background:'white',height:'460px',paddingX:3,paddingY:3}}>
                                <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>Open Jobs</Typography>
                                <Box sx={{mt:2}}>
                                    <Grid container sx={{}}>
                                        <Grid item xs={4.5}>
                                            <Typography>Search Engine Optimization</Typography>
                                        </Grid>
                                        <Grid item xs={2.3}>
                                            <Typography sx={{color:'#aeaeb2'}}>No End Date</Typography>
                                        </Grid>
                                        <Grid item xs={3.8}>
                                            <Typography sx={{color:'#aeaeb2',paddingLeft:1.8}}>--</Typography>
                                        </Grid>
                                        <Grid item xs={1.3}>
                                            <Button sx={{color:'#aeaeb2',border:'1px solid #aeaeb2',mt:-1}}>View</Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <hr style={{border:'1px solid #aeaeb2',marginTop:'10px'}}/>
                                        </Grid>
                                    </Grid>
                                    <Grid container sx={{mt:2}}>
                                        <Grid item xs={4.5}>
                                            <Typography>Web Developement</Typography>
                                        </Grid>
                                        <Grid item xs={2.3}>
                                            <Typography sx={{color:'#aeaeb2'}}>No End Date</Typography>
                                        </Grid>
                                        <Grid item xs={3.8} sx={{display:'flex',alignItems:'center'}}>
                                            <img src={Capture3} style={{marginTop:'-10px'}}/>
                                            <Box sx={{mt:-1.3}}>
                                                <Typography sx={{fontSize:'14px',fontWeight:'medium'}}>Priyanka Dinodiya</Typography>
                                                <Typography sx={{fontSize:'13px',color:'#aeaeb2'}}>Managing Director</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={1.3}>
                                            <Button sx={{color:'#aeaeb2',border:'1px solid #aeaeb2',mt:-1}}>View</Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <hr style={{border:'1px solid #aeaeb2',marginTop:'10px'}}/>
                                        </Grid>
                                    </Grid>
                                    <Grid container sx={{mt:2}}>
                                        <Grid item xs={4.5}>
                                            <Typography>Socisl Media Manager</Typography>
                                        </Grid>
                                        <Grid item xs={2.3}>
                                            <Typography sx={{color:'#aeaeb2'}}>No End Date</Typography>
                                        </Grid>
                                        <Grid item xs={3.8} sx={{display:'flex',alignItems:'center'}}>
                                            <img src={Capture3} style={{marginTop:'-10px'}}/>
                                            <Box sx={{mt:-1.3}}>
                                                <Typography sx={{fontSize:'14px',fontWeight:'medium'}}>Priyanka Dinodiya</Typography>
                                                <Typography sx={{fontSize:'13px',color:'#aeaeb2'}}>Managing Director</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={1.3}>
                                            <Button sx={{color:'#aeaeb2',border:'1px solid #aeaeb2',mt:-1}}>View</Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <hr style={{border:'1px solid #aeaeb2',marginTop:'10px'}}/>
                                        </Grid>
                                    </Grid>
                                    <Grid container sx={{mt:2}}>
                                        <Grid item xs={4.5}>
                                            <Typography>Graphic Designer</Typography>
                                        </Grid>
                                        <Grid item xs={2.3}>
                                            <Typography sx={{color:'#aeaeb2'}}>No End Date</Typography>
                                        </Grid>
                                        <Grid item xs={3.8} sx={{display:'flex',alignItems:'center'}}>
                                            <img src={Capture3} style={{marginTop:'-10px'}}/>
                                            <Box sx={{mt:-1.3}}>
                                                <Typography sx={{fontSize:'14px',fontWeight:'medium'}}>Priyanka Dinodiya</Typography>
                                                <Typography sx={{fontSize:'13px',color:'#aeaeb2'}}>Managing Director</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={1.3}>
                                            <Button sx={{color:'#aeaeb2',border:'1px solid #aeaeb2',mt:-1}}>View</Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <hr style={{border:'1px solid #aeaeb2',marginTop:'10px'}}/>
                                        </Grid>
                                    </Grid>
                                    <Grid container sx={{mt:2}}>
                                        <Grid item xs={4.5}>
                                            <Typography>Administration Assitance</Typography>
                                        </Grid>
                                        <Grid item xs={2.3}>
                                            <Typography sx={{color:'#aeaeb2'}}>No End Date</Typography>
                                        </Grid>
                                        <Grid item xs={3.8} sx={{display:'flex',alignItems:'center'}}>
                                            <img src={Capture3} style={{marginTop:'-10px'}}/>
                                            <Box sx={{mt:-1.3}}>
                                                <Typography sx={{fontSize:'14px',fontWeight:'medium'}}>Priyanka Dinodiya</Typography>
                                                <Typography sx={{fontSize:'13px',color:'#aeaeb2'}}>Managing Director</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={1.3}>
                                            <Button sx={{color:'#aeaeb2',border:'1px solid #aeaeb2',mt:-1}}>View</Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <hr style={{border:'1px solid #aeaeb2',marginTop:'10px'}}/>
                                        </Grid>
                                    </Grid>
                                    <Grid container sx={{mt:2}}>
                                        <Grid item xs={4.5}>
                                            <Typography>Accounting</Typography>
                                        </Grid>
                                        <Grid item xs={2.3}>
                                            <Typography sx={{color:'#aeaeb2'}}>No End Date</Typography>
                                        </Grid>
                                        <Grid item xs={3.8} sx={{display:'flex',alignItems:'center'}}>
                                            <img src={Capture3} style={{marginTop:'-10px'}}/>
                                            <Box sx={{mt:-1.3}}>
                                                <Typography sx={{fontSize:'14px',fontWeight:'medium'}}>Priyanka Dinodiya</Typography>
                                                <Typography sx={{fontSize:'13px',color:'#aeaeb2'}}>Managing Director</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={1.3}>
                                            <Button sx={{color:'#aeaeb2',border:'1px solid #aeaeb2',mt:-1}}>View</Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <hr style={{border:'1px solid #aeaeb2',marginTop:'10px'}}/>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{mt:6}}>
                    <Grid container spacing={4}>
                        <Grid item xs={6} >
                        <Box sx={{background:'white',paddingX:2,paddingY:3}}>
                        <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>Application Source</Typography>
                            <Box sx={{display:'flex',alignItems:'center',ml:18,mt:4,mb:5.2}}>
                                <img src={Capture4} style={{width:'205px',marginTop:'30px'}}/>
                                <Box sx={{ml:3,mt:3}}>
                                    <Box sx={{display:'flex',alignItems:'center'}}>
                                        <RectangleIcon sx={{color:'#0b66c3',transform:'scaleX(2) scaleY(0.8)'}}/>
                                        <Typography sx={{color:'#aeaeb2',ml:2}}>LinkedIn</Typography>
                                    </Box>
                                    <Box sx={{display:'flex',alignItems:'center'}}>
                                        <RectangleIcon sx={{color:'#1878f3',transform:'scaleX(2) scaleY(0.8)'}}/>
                                        <Typography sx={{color:'#aeaeb2',ml:2}}>Facebook</Typography>
                                    </Box>
                                    <Box sx={{display:'flex',alignItems:'center'}}>
                                        <RectangleIcon sx={{color:'#e44160',transform:'scaleX(2) scaleY(0.8)'}}/>
                                        <Typography sx={{color:'#aeaeb2',ml:2}}>Instagram</Typography>
                                    </Box>
                                    <Box sx={{display:'flex',alignItems:'center'}}>
                                        <RectangleIcon sx={{color:'#1da1f3',transform:'scaleX(2) scaleY(0.8)'}}/>
                                        <Typography sx={{color:'#aeaeb2',ml:2}}>Twitter</Typography>
                                    </Box>
                                    <Box sx={{display:'flex',alignItems:'center'}}>
                                        <RectangleIcon sx={{color:'#f57e00',transform:'scaleX(2) scaleY(0.8)'}}/>
                                        <Typography sx={{color:'#aeaeb2',ml:2}}>Other</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        </Grid>
                        <Grid item xs={6}>
                        <Box sx={{background:'white',paddingX:2,paddingY:3}}>
                        <Typography sx={{fontSize:'20px',fontWeight:'bold'}}>Application Status</Typography>
                            <Box sx={{display:'flex',alignItems:'center',ml:18,mt:3,mb:3.2}}>
                                <img src={Capture5} style={{width:'200px',marginTop:'33px'}}/>
                                <Box sx={{ml:3,mt:3}}>
                                    <Box sx={{display:'flex',alignItems:'center'}}>
                                        <RectangleIcon sx={{color:'#2b2b2b',transform:'scaleX(2) scaleY(0.8)'}}/>
                                        <Typography sx={{color:'#aeaeb2',ml:2}}>applied</Typography>
                                    </Box>
                                    <Box sx={{display:'flex',alignItems:'center'}}>
                                        <RectangleIcon sx={{color:'#f1e52d',transform:'scaleX(2) scaleY(0.8)'}}/>
                                        <Typography sx={{color:'#aeaeb2',ml:2}}>phone screen</Typography>
                                    </Box>
                                    <Box sx={{display:'flex',alignItems:'center'}}>
                                        <RectangleIcon sx={{color:'#3d8ee9',transform:'scaleX(2) scaleY(0.8)'}}/>
                                        <Typography sx={{color:'#aeaeb2',ml:2}}>interview</Typography>
                                    </Box>
                                    <Box sx={{display:'flex',alignItems:'center'}}>
                                        <RectangleIcon sx={{color:'#31ac16',transform:'scaleX(2) scaleY(0.8)'}}/>
                                        <Typography sx={{color:'#aeaeb2',ml:2}}>hired</Typography>
                                    </Box>
                                    <Box sx={{display:'flex',alignItems:'center'}}>
                                        <RectangleIcon sx={{color:'#ef1128',transform:'scaleX(2) scaleY(0.8)'}}/>
                                        <Typography sx={{color:'#aeaeb2',ml:2}}>rejected</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>   
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Drawer>
    );
}

export default Dashboard