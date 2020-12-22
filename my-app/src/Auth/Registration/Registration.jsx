import React from 'react';
import {Field, Form, Formik, useField} from "formik";
import {
    Button,
    FormGroup,
    Grid,
    InputLabel,
    TextField,
    Typography
} from "@material-ui/core";
import {boolean, object, ref, string} from "yup";
import useStyles from './../style';
import validation from "./validation";
import CustomCheckbox from "../../components/CustomCheckbox/CustomCheckbox";

const initialValues = {
    email: '',
    password: '',
    checkbox: false,
}

const Registration = () => {
    const classes = useStyles();
    return (
        <Grid container wrap='wrap' alignItems='center' justify='center' className={classes.container}>
            <Grid item className={classes.item} justify='center'>
                <Typography variant="p"> Registration </Typography>
            </Grid>
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
                            <InputLabel className={classes.label}>
                                Email address
                                <Field className={classes.field} name="email" as={TextField}/>
                            </InputLabel>
                            <InputLabel className={classes.label}>
                                Password
                                <Field className={classes.field} name="password" as={TextField}/>
                            </InputLabel>
                            <InputLabel>
                                Repeat password
                                <Field className={classes.field} name="repeatPassword" as={TextField}/>
                            </InputLabel>
                            <Button>Registration</Button>
                            <CustomCheckbox name="checkbox" label="just a simple checkbox"/>
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

export default Registration;