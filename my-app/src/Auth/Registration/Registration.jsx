import React from 'react';
import {Field, Form, Formik, useField} from "formik";
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    InputLabel,
    TextField,
    Typography
} from "@material-ui/core";
import {boolean, object, ref, string} from "yup";
import useStyles from './../style';

const CustomCheckbox = (props) => {
    const [field] = useField({
        name: props.name,
        type: 'checkbox',
        value: props.value,
    })
    return (
        <FormControlLabel
            control={<Checkbox {...props} {...field} />}
            label={props.label}
        />
    )
}
const initialValues = {
    email: '',
    password: '',
    checkbox: false,
}

const Login = () => {
    const classes = useStyles();
    return (
        <Grid container wrap='wrap' alignItems='center' justify='center' className={classes.container}>
            <Grid item className={classes.item} justify='center'>
                <Typography variant="p"> Registration </Typography>
            </Grid>
            <Formik
                validationSchema={
                    object({
                        email: string().email().required(),
                        password: string().matches(
                            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                        ).required().min(8),
                        repeatPassword: string()
                            .oneOf([ref('password'), null], 'Passwords must match'),
                        checkbox: boolean().oneOf([true], 'Прочтите!'),
                    })
                }
                initialValues={initialValues}
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

export default Login;