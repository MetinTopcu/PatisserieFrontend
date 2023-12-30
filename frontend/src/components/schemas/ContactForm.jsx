import * as yup from "yup";
//const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required "),
  subject: yup.string().required("Subject is required "),
  message: yup.string().required("Message is required "),
});

// export const advancedSchema = yup.object().shape({
//     username:yup.string().min(3,'Username must be at least 3 characters').required('Username is required '),
//     university:yup.string().oneOf(['bogazici','gsu','odtü','itü'],'Please select your university').required('Please select your university'),
//     isAccepted:yup.boolean().oneOf([true],'Please accept the terms of use ')
// });
