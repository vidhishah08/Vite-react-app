import React, { useState } from 'react';
import { Drawer, Box, TextField, Button, Checkbox, FormControlLabel, Grid, InputLabel, Select, MenuItem , Typography} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import RichTextEditor from 'react-rte';
import ProjectTemplateDrawer from './ProjectTemplateDrawer';
import PayrollDrawer from './PayrollDrawer';

function ProjectFormDrawer({ open, onClose }) {
  const initialValues = {
    shortCode: '',
    projectName: '',
    startDate: '',
    deadline: '',
    noDeadline: false,
    projectCategory: '',
    department: '',
    client: '',
    projectSummary: RichTextEditor.createEmptyValue(),
    notes: RichTextEditor.createEmptyValue(),
    createPublicProject: false,
  };

  const [projectSummary, setProjectSummary] = useState(RichTextEditor.createEmptyValue());
  const [notes, setNotes] = useState(RichTextEditor.createEmptyValue());
  const [templateDrawerOpen, setTemplateDrawerOpen] = useState(false);
  const [payrollDrawerOpen, setPayrollDrawerOpen] = useState(false);

  const handleSubmit = (values) => {
    values.projectSummary = projectSummary.toString('html');
    values.notes = notes.toString('html');
    console.log(values);
  };

  const toggleTemplateDrawer = () => {
    setTemplateDrawerOpen(!templateDrawerOpen);
  };

  const togglePayrollDrawer = () => {
    setPayrollDrawerOpen(!payrollDrawerOpen);
  };

  return (
    <>
    <Drawer anchor="right" open={open} onClose={onClose} sx={{'& .MuiDrawer-paper':{width:'80%', background:'#f3f4f8'}}}>
      <Box p={2} role="presentation">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, handleChange }) => (
            <Form>
              <Box sx={{ fontSize: 25,fontWeight:'bold' , mb:3 , mt: 2}}>Add Project</Box>
              <Box sx={{background:'white', paddingX: 3,paddingTop : 1,paddingBottom:3}}>
                <Box sx={{ fontSize : 29, mt: 2, paddingBottom: 2, borderBottom : 1, borderColor: '#dbdce0',mb:2}}>Project Details</Box>
                <Grid container spacing={2}  sx={{mt: '30px'}}>
                  <Grid item xs={4}>
                    <InputLabel sx={{ color:"#525254" ,mb:1 }}>Short Code</InputLabel>
                    <Field as={TextField} fullWidth placeholder="Project Unique Short Code" name="shortCode" variant="outlined" sx={{color:"#ebedf4"}}/>
                  </Grid>
                  <Grid item xs={8}>
                    <InputLabel sx={{ color:"#525254" ,mb:1 ,display: 'flex' ,alignItems: 'center'}}>Project Name<Typography sx={{color : 'red' ,ml: '5px'}}>*</Typography></InputLabel>
                    <Field as={TextField} fullWidth required placeholder="Write a project Name" name="projectName" variant="outlined" />
                  </Grid>
                  <Grid item xs={4} sx={{mt : '30px'}}>
                    <InputLabel sx={{ color:"#525254" ,mb:1 ,display: 'flex' ,alignItems: 'center'}}>Start date<Typography sx={{color : 'red' ,ml: '5px'}}>*</Typography></InputLabel>
                    <Field as={TextField} fullWidth type="date" placeholder="Select date"  name="startDate" InputLabelProps={{ shrink: true }} variant="outlined" required />
                  </Grid>
                  <Grid item xs={4} sx={{mt : '30px'}}>
                    <InputLabel sx={{ color:"#525254" ,mb:1 ,display: 'flex' ,alignItems: 'center'}}>Deadline<Typography sx={{color : 'red' ,ml: '5px'}}>*</Typography></InputLabel>
                    <Field as={TextField} fullWidth type="date" placeholder="Select date" name="deadline" InputLabelProps={{ shrink: true }} variant="outlined" required />
                  </Grid>
                  <Grid item xs={4} sx={{mt : '68px'}}>
                    <FormControlLabel
                      control={<Field as={Checkbox} name="noDeadline" />}
                      label="There is no project deadline"
                    />
                  </Grid>
                  <Grid item xs={4} sx={{mt:'30px'}}>
                    <InputLabel sx={{ color:"#525254" ,mb:1 }}>Project Category</InputLabel>
                    <Select name="projectCategory" sx={{width:'302px'}} defaultValue='--'>
                      <MenuItem value="--">--</MenuItem>
                      <MenuItem value="Type1">Type 1</MenuItem>
                      <MenuItem value="Type2">Type 2</MenuItem>
                    </Select>
                    <Button sx={{background: '#f3f4f8', color:"#525254 " ,paddingY: 2,paddingX: 2}}>Add</Button>
                  </Grid>
                  <Grid item xs={4} sx={{mt:'30px'}}>
                    <InputLabel sx={{ color:"#525254" ,mb:1 }}>Department</InputLabel>
                    <Select name="department" fullWidth defaultValue='--'>
                      <MenuItem value="--">--</MenuItem>
                      <MenuItem value="Department1">Department 1</MenuItem>
                      <MenuItem value="Department2">Department 2</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={4} sx={{mt:'30px'}}>
                    <InputLabel sx={{ color:"#525254" ,mb:1 }}>Client</InputLabel>
                    <Select name="client" sx={{width:'302px'}} defaultValue='--'>
                      <MenuItem value="--" selected>--</MenuItem>
                      <MenuItem value="Company">Company</MenuItem>
                      <MenuItem value="Personal">Personal</MenuItem>
                    </Select>
                    <Button sx={{background: '#f3f4f8', color:"#525254 " ,paddingY: 2,paddingX: 2}}>Add</Button>
                  </Grid>
                  <Grid item xs={6} sx={{mt:'30px'}}>
                    <InputLabel sx={{ color:"#525254" ,mb:1 }}>Project Summary</InputLabel>
                    <RichTextEditor
                      value={projectSummary}
                      onChange={value => setProjectSummary(value)}
                      name="projectSummary"
                    />
                  </Grid>
                  <Grid item xs={6} sx={{mt:'30px'}}>
                    <InputLabel sx={{ color:"#525254" ,mb:1 }}>Notes</InputLabel>
                    <RichTextEditor
                        value={notes}
                        onChange={value => setNotes(value)}
                        name="notes"
                    />
                  </Grid>
                  <Grid item xs={12} mt='20px'>
                    <FormControlLabel
                      control={<Field as={Checkbox} name="createPublicProject" />}
                      label="Create Public Project"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button onClick={toggleTemplateDrawer} variant="contained" color="warning">Add Project Template</Button>
                    <Button onClick={togglePayrollDrawer} variant="contained" color="warning" style={{ marginLeft: '10px' }}>Add Payroll</Button>
                  </Grid>
                  <Grid item xs={12} mt= '10px'>
                    <Button type="submit" variant="contained" color="warning">ADD</Button>
                    <Button onClick={onClose} variant="outlined" color="secondary" style={{ marginLeft: '10px' }}>Cancel</Button>
                  </Grid>
                  
                </Grid>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Drawer>
    <ProjectTemplateDrawer open={templateDrawerOpen} onClose={toggleTemplateDrawer} />
    <PayrollDrawer open={payrollDrawerOpen} onClose={togglePayrollDrawer}/>
    </>
  );
}

export default ProjectFormDrawer;
