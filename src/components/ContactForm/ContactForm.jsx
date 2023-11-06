

import { MainForm, Btn, StyledLabel, StyledField, StyledError} from './ContactForm.styled';
import * as Yup from 'yup';
import { Formik } from 'formik';

 const FormSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
  
     number: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
 });

export const ContactForm = ({ onAdd }) => (
  <div>
   
    <Formik
      initialValues={{
       name: '',
      number: '',
        
      }}
      validationSchema={FormSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          onAdd(values);
        }}
      >
    
      <MainForm>
        <StyledLabel>

           First Name
          <StyledField name="name" />
          <StyledError name="name" component="span" />
        </StyledLabel>

        <StyledLabel>
          
       Phone
            <StyledField name="number"/>
            <StyledError component={'span'} name="number" />
        
        
        </StyledLabel>
          

        
        <Btn type="submit">Submit</Btn>
      </MainForm>
    </Formik>
  </div>
);