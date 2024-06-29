import React from 'react';
import {
  Drawer, Button, TextField, Box, Typography, Select, MenuItem, FormControl, InputLabel, FormHelperText
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Define the validation schema using Yup
const validationSchema = Yup.object({
  subject: Yup.string().required('Subject is required'),
  description: Yup.string().required('Description is required'),
  contractType: Yup.string().required('Contract Type is required'),
  contractValue: Yup.string().required('Contract Value is required'),
  currency: Yup.string().required('Currency is required'),
});

function ContractFormDrawer({ open, onClose }) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box p={3} width={400} role="presentation">
        <Typography variant="h6" gutterBottom>
          Add Contract Template
        </Typography>
        <Formik
          initialValues={{
            subject: '',
            description: '',
            contractType: '',
            contractValue: '',
            currency: 'INR',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Form Submitted', values);
            onClose();
          }}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form>
              <Field
                as={TextField}
                label="Subject"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                error={touched.subject && Boolean(errors.subject)}
                helperText={touched.subject && errors.subject}
              />
              <Field
                as={TextField}
                label="Description"
                name="description"
                value={values.description}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                multiline
                rows={4}
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description && errors.description}
              />
              <FormControl
                fullWidth
                required
                margin="normal"
                error={touched.contractType && Boolean(errors.contractType)}
              >
                <InputLabel>Contract Type</InputLabel>
                <Field
                  as={Select}
                  name="contractType"
                  value={values.contractType}
                  onChange={handleChange}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="Type1">Type 1</MenuItem>
                  <MenuItem value="Type2">Type 2</MenuItem>
                </Field>
                {touched.contractType && errors.contractType && (
                  <FormHelperText>{errors.contractType}</FormHelperText>
                )}
              </FormControl>
              <Field
                as={TextField}
                label="Contract Value"
                name="contractValue"
                value={values.contractValue}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                error={touched.contractValue && Boolean(errors.contractValue)}
                helperText={touched.contractValue && errors.contractValue}
              />
              <FormControl
                fullWidth
                required
                sx={{ mt: 2 }}
                error={touched.currency && Boolean(errors.currency)}
              >
                
                <Field
                  as={Select}
                  name="currency"
                  value={values.currency}
                  onChange={handleChange}
                  
                >
                  <MenuItem value="INR" selected>INR</MenuItem>
                  <MenuItem value="USD">USD</MenuItem>
                </Field>
                {touched.currency && errors.currency && (
                  <FormHelperText>{errors.currency}</FormHelperText>
                )}
              </FormControl>
              <Box mt={2} display="flex" justifyContent="space-between">
                <Button type="submit" variant="contained" color="warning" startIcon={<DoneIcon />}>
                  Save
                </Button>
                <Button onClick={onClose}>
                  Cancel
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Drawer>
  );
}

export default ContractFormDrawer;
