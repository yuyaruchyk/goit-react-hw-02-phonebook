import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MainForm, Btn, StyledLabel, StyledField } from './ContactForm.styled';

const initialValues = {
  name: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
});

export const ContactForm = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <MainForm>
        <StyledLabel htmlFor="name">Name:</StyledLabel>
        <StyledField type="text" id="name" name="name" required />
        <StyledLabel htmlFor="number">Number:</StyledLabel>
        <StyledField type="number" id="number" name="number" />
        <ErrorMessage name="name" component="div" />

        <Btn type="submit">Add contact</Btn>
      </MainForm>
    </Formik>
  );
};
