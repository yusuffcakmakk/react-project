import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import KodlamaTextInput from "../utilities/KodlamaTextInput";

const ProductAdd = () => {
  const initialValues = { email: "", password: "" };

  const schema = Yup.object({
    email: Yup.string().email().required("Email girmek zorunludur."),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });
  return (
 
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema}
       onSubmit={(values)=>{
           console.log(values);
       }}>
        <Form className="ui form">
            <KodlamaTextInput name="email" placeholder="Email"/>
            <KodlamaTextInput name="password" placeholder="Password"/>
          
          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
  );
};

export default ProductAdd;
