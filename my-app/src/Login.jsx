import React from 'react';
import {Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, TextField, Typography} from "@material-ui/core";
import {Field, Form, Formik, useField,} from 'formik';
import {array, boolean, number, object, string} from "yup";

const initialValues = {
    fullName: '',
    initialInvestment: undefined,
    investmentRisk: [],
    commentAboutInvestmentRisk: '',
    dependents: -1,
    acceptedTermsAndConditions: false
};

const CustomCheckBox = (props) => {
    const [field] = useField({
        name: props.name,
        type: 'checkbox',
        value: props.value,
    });
    return (<FormControlLabel
        control={<Checkbox {...props} {...field}/>}
        label={props.label}
    />)
}

const Login = () => {
    return (
        <Grid>
            <Typography variant="h4"> Login </Typography>

            <Formik
                validationSchema={
                    object({
                        fullName: string().required().min(2).max(100),
                        initialInvestment: number().required().min(100),
                        investmentRisk: array(string().oneOf(['High']).required('req')),
                        dependents: number().required().min(0).max(5),
                        acceptedTermsAndConditions: boolean().oneOf([true]),
                        // investmentRisk: array(string().oneOf(['High', 'Medium', 'Low'])).min(1)

                    })
                }
                initialValues={initialValues} onSubmit={() => {
            }}>
                {({values, errors}) => (
                    <Form>

                        <FormGroup>
                            <Field name="fullName" as={TextField} label="Full name"/>
                            <Field name="initialInvestment" type="number" as={TextField} label="Investments"/>

                            <CustomCheckBox name="investmentRisk" value="high" label="High"/>
                            <CustomCheckBox name="investmentRisk" value="medium" label="Medium"/>
                            <CustomCheckBox name="investmentRisk" value="low" label="Low"/>

                            <Field name="commentAboutInvestmentRisk" as={TextField} multiline rows={5}/>
                            <Field name="dependents" as={TextField} select>
                                <MenuItem value="1">1</MenuItem>
                                <MenuItem value="2">2</MenuItem>
                                <MenuItem value="3">3</MenuItem>
                                <MenuItem value="4">4</MenuItem>
                                <MenuItem value="5">5</MenuItem>
                            </Field>
                            <CustomCheckBox name="acceptedTermsAndConditions" label="Allow"/>
                        </FormGroup>
                        <pre>
                             {JSON.stringify(errors, null, 4)}
                            {JSON.stringify(values, null, 4)}
                        </pre>
                    </Form>
                )}
            </Formik>
        </Grid>
    )
}


export default Login
