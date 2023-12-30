import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("You must enter email"),
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required "),

  password: yup
    .string()
    .min(5, "Please enter minumum 5 characters")
    .matches(passwordRules, {
      message:
        "Please enter at least 1 uppercase letter, lowercase letter and number.",
    })
    .required("You must enter password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password is not same")
    .required("You must enter confirm password"),
});

// export const advancedSchema = yup.object().shape({
//     username:yup.string().min(3,'Username must be at least 3 characters').required('Username is required '),
//     university:yup.string().oneOf(['bogazici','gsu','odtü','itü'],'Please select your university').required('Please select your university'),
//     isAccepted:yup.boolean().oneOf([true],'Please accept the terms of use ')
// });
