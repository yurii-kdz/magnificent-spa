import React from 'react';
import {Form, Formik, Field} from "formik";
import {FormGroup, Grid, InputLabel, TextField, Typography, Button} from "@material-ui/core";
import {object,  string} from "yup";
import useStyles from './../style';
import validation from "./validation";


const initialValues = {
    email: '',
    password: '',
}

const Login = () => {
    const classes = useStyles();
    return (
        <Grid container wrap = 'wrap' alignItems='center' justify= 'center' className = {classes.container}>
            <Formik
                validationSchema={
                    object(validation)
                }
                initialValues={initialValues}
                onSubmit={() => ({})}
            >
                {({values, errors}) => (
                    <Form>
                        <FormGroup className={classes.formGroup}>
                            <InputLabel className = {classes.label}>
                                Email address
                                <Field className = {classes.field} name="email" as={TextField} />
                            </InputLabel>
                            <InputLabel>
                                Password
                                <Field  className = {classes.field} name="password" as={TextField} />
                            </InputLabel>
                            <Button>Sign in</Button>
                        </FormGroup>
                        <pre>
                            {JSON.stringify(values, null, 4)}
                            {JSON.stringify(errors, null, 4)}
                        </pre>
                    </Form>

                )}
            </Formik>

        </Grid>
    );
};

export default Login;