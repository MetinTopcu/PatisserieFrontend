import React from "react";
import "../styles/Account.css";
import { useFormik } from "formik";
import { basicSchema } from "./schemas/AccountForm";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function Account() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      //issubmitting işlem bitene kadar butona bidaha basımlasın diye
      initialValues: {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit, //useFormik in onSubmiti aslında handleSubmit aynı şey
    });

  return (
    <div className="container">
      <div className="account-contents">
        <div className="account-login">
          <div className="account-title">Login</div>
          <form>
            <div className="account-user">
              <label htmlFor="">
                Username or email address
                <span className="account-required">*</span>
              </label>
              <input
                type="text"
                className="account-input"
                //   onChange={handleChange}
              />
              <label htmlFor="">
                Password<span className="account-required">*</span>
              </label>
              <input
                type="password"
                className="account-input"
                //   onChange={handleChange}
              />
              <label htmlFor="">Remember me</label>
            </div>
            <div className="account-button">
              <button disabled={isSubmitting} type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="account-register">
          <div className="account-title">Register</div>
          <form onSubmit={handleSubmit}>
            <div className="account-user">
              <label htmlFor="">
                Username<span className="account-required">*</span>
              </label>
              <input
                type="text"
                className={
                  errors.username
                    ? "input-error account-input"
                    : "account-input"
                }
                value={values.username}
                onChange={handleChange}
                id="username"
              />
              {errors.username && <p className="error">{errors.username}</p>}
              <label htmlFor="">
                Email adress<span className="account-required">*</span>
              </label>
              <input
                type="email"
                className={
                  errors.email ? "input-error account-input" : "account-input"
                }
                value={values.email}
                onChange={handleChange}
                id="email"
              />
              {errors.email && <p className="error">{errors.email}</p>}
              <label htmlFor="">
                Password<span className="account-required">*</span>
              </label>
              <input
                type="password"
                className={
                  errors.password
                    ? "input-error account-input"
                    : "account-input"
                }
                value={values.password}
                onChange={handleChange}
                id="password"
              />
              {errors.password && <p className="error">{errors.password}</p>}
              <label htmlFor="">
                Confirm Password<span className="account-required">*</span>
              </label>
              <input
                type="password"
                className={
                  errors.confirmPassword
                    ? "input-error account-input"
                    : "account-input"
                }
                value={values.confirmPassword}
                onChange={handleChange}
                id="confirmPassword"
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
            </div>
            <div className="account-button">
              <button disabled={isSubmitting} type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Account;
