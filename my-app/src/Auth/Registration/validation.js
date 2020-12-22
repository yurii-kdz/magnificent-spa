import {boolean, ref, string} from "yup";

const validation = {
    email: string().email().required(),
    password: string().matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ).required().min(8),
    repeatPassword: string()
        .oneOf([ref('password'), null], 'Passwords must match'),
    checkbox: boolean().oneOf([true], 'Прочтите!'),
};

export default validation;

