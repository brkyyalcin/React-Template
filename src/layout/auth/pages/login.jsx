import React from "react";
import { GetWord } from "../../../utils";
import { useFormik } from "formik";
import validations from "../../../utils/validations";

const Login = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values) => {
        console.log(values);
      },
      validationSchema: validations.loginValidations,
    });

  return (
    <div className="row">
      <div className="col-12">
        <img src={process.env.PUBLIC_URL + "/Assets/images/logo.png"} />
        <h3>
          <span className="text-primary">Studia</span>
          <span className="text-secondary">Admin</span>
        </h3>
        <h4>{GetWord("login")}</h4>
        <form onSubmit={handleSubmit}>
          <div className="col-12">
            <div className="mbt-3">
              <div className="form-input">
                <label htmlFor="password">{GetWord("password")}</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <div className="form-text">{errors.email}</div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
