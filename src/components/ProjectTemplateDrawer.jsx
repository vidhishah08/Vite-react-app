import React, { useState } from 'react';
import { Drawer, Box, TextField, Button, Checkbox, FormControlLabel, Grid, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import RichTextEditor from 'react-rte';

function ProjectTemplateDrawer({ open, onClose }) {
  const [projectSummary, setProjectSummary] = useState(RichTextEditor.createEmptyValue());
  const [notes, setNotes] = useState(RichTextEditor.createEmptyValue());

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      projectName: event.target.projectName.value,
      projectCategory: event.target.projectCategory.value,
      allowManualTimeLogs: event.target.allowManualTimeLogs.checked,
      projectSummary: projectSummary.toString('html'),
      notes: notes.toString('html'),
    };
    console.log(formData);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { width: '80%', background: '#f3f4f8' } }}>
      <Box p={2} role="presentation">
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, mt: 2 }}>Add Project Template</Typography>
          <Box sx={{ background: 'white', paddingX: 3, paddingTop: 1, paddingBottom: 3 }}>
            <Typography variant="h6" sx={{ mt: 2, paddingBottom: 2, borderBottom: 1, borderColor: '#dbdce0', mb: 2 }}>Project Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} mt= '20px'>
                <InputLabel sx={{ color: "#525254", mb: 1, display:'flex',alignItems:'center' }}>Project Name<Typography sx={{color:'red' ,ml:'5px'}}>*</Typography></InputLabel>
                <TextField fullWidth placeholder="Write a project name" name="projectName" variant="outlined" required />
              </Grid>
              <Grid item xs={6} mt= '20px'>
                <InputLabel sx={{ color: "#525254", mb: 1 }}>Project Category</InputLabel>
                <Select name="projectCategory" fullWidth defaultValue='--' sx={{width: '490px'}}>
                  <MenuItem value="--">--</MenuItem>  
                  <MenuItem value="Type1">Type 1</MenuItem>
                  <MenuItem value="Type2">Type 2</MenuItem>
                </Select>
                <Button sx={{ background: '#f3f4f8', color: "#525254", paddingY: 2, paddingX: 2 }}>Add</Button>
              </Grid>
              <Grid item xs={12} mt='15px'>
                <FormControlLabel
                  control={<Checkbox name="allowManualTimeLogs" />}
                  label="Allow manual time logs"
                />
              </Grid>
              <Grid item xs={12} mt='15px'>
                <InputLabel sx={{ color: "#525254", mb: 1 }}>Project Summary</InputLabel>
                <RichTextEditor
                  value={projectSummary}
                  onChange={value => setProjectSummary(value)}
                  name="projectSummary"
                />
              </Grid>
              <Grid item xs={12} mt='15px'>
                <InputLabel sx={{ color: "#525254", mb: 1 }}>Notes</InputLabel>
                <RichTextEditor
                  value={notes}
                  onChange={value => setNotes(value)}
                  name="notes"
                />
              </Grid>
              <Grid item xs={12} mt='20px'>
                <Button type="submit" variant="contained" color="warning">Save</Button>
                <Button onClick={onClose} variant="outlined" color="secondary" style={{ marginLeft: '10px' }}>Cancel</Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Box>
    </Drawer>
  );
}

export default ProjectTemplateDrawer;

