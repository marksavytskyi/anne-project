import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

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
    validate: values => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Required';
      }

      if (!values.phone) {
        errors.phone = 'Required';
      }

      return errors;
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await fetch('/.netlify/functions/submit-form', {
          method: 'POST',
          body: JSON.stringify(values),
        });

        if (response.ok) {
          alert('Form submitted successfully');
          resetForm();
        } else {
          alert('Failed to submit form');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while submitting the form');
      }

      setSubmitting(false);
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

  const FormRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  `;

  const FormItem = styled.div`
    flex-basis: 100%;
    margin-bottom: 12px;

    @media (min-width: 768px) {
      flex-basis: 48%;
      margin-bottom: 16px;
    }
  `;

  const SubmitButton = styled(Button)`
    @media (min-width: 768px) {
      width: 50%;
      margin-top: 24px;
    }
  `;

  const WhiteTextField = styled(TextField)`
    .MuiInputBase-input,
    .MuiInputLabel-root,
    .MuiOutlinedInput-root {
      color: white;
    }

    .MuiOutlinedInput-root {
      fieldset {
        border-color: white;
      }
      &:hover fieldset {
        border-color: white;
      }
      &.Mui-focused fieldset {
        border-color: white;
      }
    }
  `;

  // Rest of your component code...

  return (
    <div>
      <form>
        <FormRow>
          <FormItem>
            <WhiteTextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </FormItem>
          <FormItem>
            <WhiteTextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              type="tel"
              value={formik.values.phone}
              onChange={handlePhoneChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </FormItem>
        </FormRow>
        <SubmitButton
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Submit
        </SubmitButton>
      </form>
    </div>
  );
};

export default WithMaterialUI;
