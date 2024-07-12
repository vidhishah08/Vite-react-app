import { Box, Drawer, Typography,RadioGroup,FormControlLabel,Radio,Grid, Select, MenuItem, Button, TextField } from "@mui/material";
import React,{useState} from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SearchIcon from '@mui/icons-material/Search';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import RichTextEditor from 'react-rte';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DoneIcon from '@mui/icons-material/Done';

function Tickets({open,onClose}){
    const [requester, setRequester] = useState("Client");
    const [description, setDescription] = useState(RichTextEditor.createEmptyValue());
    

    const handleRequesterChange = (event) => {
        setRequester(event.target.value);
    };

    

    return(
        <Drawer anchor="right" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { width: '83%' ,background : "#f3f4f8"} }}>
            <Box  role="presentation">
                <Box sx={{background:'white',paddingX:4,paddingY:2,display:'flex',alignItems:'center'}}>
                    <Typography sx={{fontSize:'28px',fontWeight:'bold'}}>Create Ticket</Typography>
                    <Box sx={{color:'#aeaeb2',fontSize:'25px',display:'flex',alignItems:'center',mt:0.7,ml:1.5}}>
                        <Typography>Home</Typography>
                        <FiberManualRecordIcon sx={{width:'7px',mx:'4px',mt:'2px'}}/>
                        <Typography>Tickets</Typography>
                        <FiberManualRecordIcon sx={{width:'7px',mx:'4px',mt:'2px'}}/>
                        <Typography>Create Tickets</Typography>
                    </Box>
                    <Box sx={{display:'flex',alignItems:'center',color:'#606f84',ml:75}}>
                        <SearchIcon sx={{mr:1.6}}/>
                        <WatchLaterIcon sx={{mr:1.6}}/>
                        <AddCircleIcon sx={{mr:1.6}}/>
                        <NotificationsIcon sx={{mr:1.6}}/>
                        <PowerSettingsNewIcon />
                    </Box>
                </Box>
                <Box sx={{mx:4,my:2,background:'white',paddingY:2}}>
                    <Typography sx={{fontSize:'24px',fontWeight:'light',paddingX:2,paddingBottom:2}}>Ticket Details</Typography>
                    <hr style={{border:'1px solid #f3f4f8',marginTop:'-3px'}}/>
                    <Box sx={{paddingX:3,paddingY:3}}>
                        <Grid container spacing={3}>
                            <Grid item xs={4} >
                                <Typography sx={{color:'#606f84',fontSize:'18px'}}>Requester</Typography>
                                <RadioGroup
                                 row
                                 value={requester}
                                 onChange={handleRequesterChange}
                                 sx={{ display: 'flex', alignItems: 'center', mt: 1 }}
                                >
                                    <FormControlLabel value="Client" control={<Radio />} label="Client" />
                                    <FormControlLabel value="Employee" control={<Radio />} label="Employee" />
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{color:'#606f84',fontSize:'18px',display:'flex',alignItems:'center'}}>Requester Name<Typography sx={{color:'red',ml:1.2,mt:-1}}>*</Typography></Typography>
                                <Select name="requesterName" fullWidth defaultValue='--' sx={{'& .MuiInputBase-input':{height:'20px',padding:'10px'},mt:1}} required>
                                    <MenuItem value="--">--</MenuItem>
                                    <MenuItem value="xyz">xyz</MenuItem>
                                    <MenuItem value="abc">abc</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{color:'#606f84',fontSize:'18px',display:'flex',alignItems:'center'}}>Assign Grp<Typography sx={{color:'red',ml:1.2,mt:-1}}>*</Typography></Typography>
                                <Box sx={{display:'flex',alignItems:'center'}}>
                                    <Select name="AssignGroup" defaultValue='HR' sx={{'& .MuiInputBase-input':{height:'20px',padding:'10px'},mt:1,width:'300px'}} required>
                                        <MenuItem value="HR">HR</MenuItem>
                                        <MenuItem value="Mnager">Manager</MenuItem>
                                        <MenuItem value="Engineer">Engineer</MenuItem>
                                    </Select>
                                    <Button style={{color:'#aeaeb2',textAlign:'center',border:'1px solid #aeaeb2',marginTop:'7px',paddingTop:'8px',paddingBottom:'8px'}}>Add</Button>
                                </Box>    
                            </Grid>
                            <Grid item xs={4} sx={{mt:1}}>
                                <Typography sx={{color:'#606f84',fontSize:'18px',display:'flex',alignItems:'center'}}>Agent</Typography>
                                <Box sx={{display:'flex',alignItems:'center'}}>
                                    <Select name="Agent" defaultValue='--' sx={{'& .MuiInputBase-input':{height:'20px',padding:'10px'},mt:1,width:'300px'}}>
                                        <MenuItem value="--">--</MenuItem>
                                        <MenuItem value="Agent1">Agent1</MenuItem>
                                        <MenuItem value="Agent2">Agent2</MenuItem>
                                    </Select>
                                    <Button style={{color:'#aeaeb2',textAlign:'center',border:'1px solid #aeaeb2',marginTop:'7px',paddingTop:'8px',paddingBottom:'8px'}}>Add</Button>
                                </Box>    
                            </Grid>
                            <Grid item xs={4} sx={{mt:1}}>
                            <Typography sx={{color:'#606f84',fontSize:'18px'}}>Project</Typography>
                                <Select name="requesterName" fullWidth defaultValue='--' sx={{'& .MuiInputBase-input':{height:'20px',padding:'10px'},mt:1}}>
                                    <MenuItem value="--">--</MenuItem>
                                    <MenuItem value="xyz">xyz</MenuItem>
                                    <MenuItem value="abc">abc</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{color:'#606f84',fontSize:'18px',display:'flex',alignItems:'center',mb:1}}>Ticket Subject<Typography sx={{color:'red',ml:1.2,mt:-1}}>*</Typography></Typography>
                                <TextField fullWidth name="Project" sx={{'& .MuiInputBase-input':{height:'24px',padding:'10px'}}} required/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{color:'#606f84',fontSize:'18px',display:'flex',alignItems:'center',mb:1}}>Description<Typography sx={{color:'red',ml:1.2,mt:-1}}>*</Typography></Typography>
                                <RichTextEditor
                                value={description}
                                onChange={value => setDescription(value)}
                                name="description"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button style={{display:'flex',alignItems:'center',fontWeight:'bold'}} ><AttachFileIcon sx={{transform: 'rotate(45deg)',width:'20px',mr:0.5,mt:-0.5,fontWeight:'bold'}}/>Upload file</Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <hr style={{border:'1px solid #f3f4f8',marginTop:'-10px'}}/>
                    <Box sx={{mt:2,paddingX:2}}>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <KeyboardArrowDownIcon sx={{mt:-0.4}}/>
                            <Typography sx={{fontSize:'25px',fontWeight:'lighter'}}>Other Details</Typography>
                        </Box>
                        <Grid container spacing={2} mx='-15px'mt='10px' >
                            <Grid item xs={4}>
                                <Typography sx={{color:'#606f84',fontSize:'18px',display:'flex',alignItems:'center'}}>Priority</Typography>
                                <Box sx={{display:'flex',alignItems:'center'}}>
                                    <Select name="Priority" defaultValue='Low' sx={{'& .MuiInputBase-input':{height:'20px',padding:'10px'},mt:1}} required fullWidth>
                                        <MenuItem value="Low">Low</MenuItem>
                                        <MenuItem value="Medium">Medium</MenuItem>
                                        <MenuItem value="High">High</MenuItem>
                                    </Select>
                                </Box>   
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{color:'#606f84',fontSize:'18px'}}>Type</Typography>
                                <Box sx={{display:'flex',alignItems:'center'}}>
                                    <Select name="Type" defaultValue='--' sx={{'& .MuiInputBase-input':{height:'20px',padding:'10px'},mt:1,width:'300px'}}>
                                        <MenuItem value="--">--</MenuItem>
                                        <MenuItem value="Type1">Type1</MenuItem>
                                        <MenuItem value="Type2">Type2</MenuItem>
                                    </Select>
                                    <Button style={{color:'#aeaeb2',textAlign:'center',border:'1px solid #aeaeb2',marginTop:'7px',paddingTop:'8px',paddingBottom:'8px'}}>Add</Button>
                                </Box>    
                            </Grid>
                            <Grid item xs={4} >
                                <Typography sx={{color:'#606f84',fontSize:'18px'}}>Channel Name</Typography>
                                <Box sx={{display:'flex',alignItems:'center'}}>
                                    <Select name="Channel Name" defaultValue='--' sx={{'& .MuiInputBase-input':{height:'20px',padding:'10px'},mt:1,width:'300px'}}>
                                        <MenuItem value="--">--</MenuItem>
                                        <MenuItem value="Channel1">Channel1</MenuItem>
                                        <MenuItem value="Channel2">Channel2</MenuItem>
                                    </Select>
                                    <Button style={{color:'#aeaeb2',textAlign:'center',border:'1px solid #aeaeb2',marginTop:'7px',paddingTop:'8px',paddingBottom:'8px'}}>Add</Button>
                                </Box>    
                            </Grid>
                            <Grid item xs={12} mr={2}>
                                <Typography sx={{color:'#606f84',fontSize:'18px',display:'flex',alignItems:'center',mb:1}}>Tags</Typography>
                                <TextField fullWidth name="Project" sx={{'& .MuiInputBase-input':{height:'24px',padding:'10px'}}} required/>
                            </Grid>
                        </Grid>
                    </Box>
                    <hr style={{border:'1px solid #f3f4f8',marginTop:'40px'}}/>
                    <Grid container>
                        <Grid item xs={12} mt='20px' ml={3} mb={2.5} sx={{display:'flex',alignItems:'center'}}>
                            <Button type="submit" variant="contained" color="warning" style={{display:'flex',alignItems:'center'}}><DoneIcon/>Save</Button>
                            <Button onClick={onClose} variant="outlined" color="secondary" style={{ marginLeft: '10px' }}>Cancel</Button>
                        </Grid>
                    </Grid>
                </Box>
                
            </Box>
        </Drawer>
    );
}

export default Tickets