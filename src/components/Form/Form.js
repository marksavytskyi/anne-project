import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object({
  name: yup.string('Enter your name').required('Name is required'),
  phone: yup
    .string('Enter your phone number')
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, 'Enter a valid phone number')
    .required('Phone number is required'),
});

const WithMaterialUI = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handlePhoneChange = event => {
    const { value } = event.target;
    if (!value.startsWith('+')) {
      event.target.value = '+' + value;
      formik.handleChange(event);
    } else {
      formik.handleChange(event);
    }
  };

  const handleSubmit = async values => {
    try {
      const response = await fetch('/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert('Form submitted successfully');
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{
            marginBottom: '12px',
            '& .MuiInputBase-input': {
              color: 'white',
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&::placeholder': {
                color: 'white',
              },
            },
          }}
        />
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="Phone"
          type="tel"
          value={formik.values.phone}
          onChange={handlePhoneChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          sx={{
            marginBottom: '12px',
            '& .MuiInputBase-input': {
              color: 'white',
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&::placeholder': {
                color: 'white',
              },
            },
          }}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          onClick={() => handleSubmit(formik.values)}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default WithMaterialUI;
