import React from 'react';
import { Drawer, Box, TextField, Button, Checkbox, FormControlLabel, Grid, InputLabel, Select, MenuItem } from '@mui/material';
import { Formik, Form, Field } from 'formik';

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
    projectSummary: '',
    notes: '',
    createPublicProject: false,
  };

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box p={2} width={600} role="presentation">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, handleChange }) => (
            <Form>
              <h2>Add Project</h2>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Field as={TextField} fullWidth label="Short Code" name="shortCode" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                  <Field as={TextField} fullWidth required label="Project Name" name="projectName" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                  <Field as={TextField} fullWidth type="date" label="Start Date" name="startDate" InputLabelProps={{ shrink: true }} variant="outlined" required/>
                </Grid>
                <Grid item xs={6}>
                  <Field as={TextField} fullWidth type="date" label="Deadline" name="deadline" InputLabelProps={{ shrink: true }} variant="outlined" required/>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Field as={Checkbox} name="noDeadline" />}
                    label="There is no project deadline"
                  />
                </Grid>
                <Grid item xs={4}>
                  <InputLabel>Project Category</InputLabel>
                  <Field as={Select} name="projectCategory" fullWidth>
                    <MenuItem value="">--</MenuItem>
                    <MenuItem value="Type1">Type 1</MenuItem>
                    <MenuItem value="Type2">Type 2</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={4}>
                  <InputLabel>Department</InputLabel>
                  <Field as={Select} name="Department" fullWidth>
                    <MenuItem value="Department1">Department 1</MenuItem>
                    <MenuItem value="Department2">Department 2</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={4}>
                  <InputLabel>Client</InputLabel>
                  <Field as={Select} name="client" fullWidth>
                    <MenuItem value="Company"> Company</MenuItem>
                    <MenuItem value="Personal"> Personal</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField} fullWidth label="Project Summary" name="projectSummary" variant="outlined" multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField} fullWidth label="Notes" name="notes" variant="outlined" multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Field as={Checkbox} name="createPublicProject" />}
                    label="Create Public Project"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="warning">Save</Button>
                  <Button onClick={onClose} variant="outlined" color="secondary" style={{ marginLeft: '10px' }}>Cancel</Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Drawer>
  );
}

export default ProjectFormDrawer;
