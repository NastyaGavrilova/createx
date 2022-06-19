import React from "react";
import { Formik } from "formik";
import axios from "axios";
import "./_authorization.scss";
const Buttons = (props) => {
  return (
    <>
      {Array.from({ length: 2 }).map((el, index) => (
        <div
          className={
            "c-modal-authorization__social c-modal-authorization__social-" +
            index
          }
          key={"c-modal-authorization__social" + index}
        >
          {props.cheldren[`${index}`]}
        </div>
      ))}
    </>
  );
};
const Facebook = () => {
  return (
    <>
      <svg
        width="8"
        height="16"
        viewBox="0 0 8 16"
        fill="#787A80"
        xmlns="http://www.w3.org/2000/svg"
        className="c-modal-authorization__social-icon"
      >
        <path
          d="M7.70791 0.669067L5.8564 0.666016C3.77629 0.666016 2.43204 2.08274 2.43204 4.2755V5.93972H0.570429C0.409564 5.93972 0.279297 6.07368 0.279297 6.23893V8.65019C0.279297 8.81543 0.409712 8.94925 0.570429 8.94925H2.43204V15.0336C2.43204 15.1989 2.5623 15.3327 2.72317 15.3327H5.15204C5.3129 15.3327 5.44317 15.1987 5.44317 15.0336V8.94925H7.61983C7.78069 8.94925 7.91096 8.81543 7.91096 8.65019L7.91185 6.23893C7.91185 6.15959 7.8811 6.0836 7.82659 6.02745C7.77208 5.9713 7.69781 5.93972 7.62057 5.93972H5.44317V4.52894C5.44317 3.85087 5.60047 3.50664 6.46035 3.50664L7.70761 3.50618C7.86833 3.50618 7.99859 3.37221 7.99859 3.20712V0.968129C7.99859 0.803187 7.86848 0.669372 7.70791 0.669067Z"
          fill="#787A80"
        />
      </svg>
    </>
  );
};
const Google = () => {
  return (
    <>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="#787A80"
        xmlns="http://www.w3.org/2000/svg"
        className="c-modal-authorization__social-icon"
      >
        <path
          d="M7.1401 6.00254H13.7237C13.7964 6.40815 13.8327 6.7956 13.8327 7.16488C13.8327 8.47858 13.5572 9.65152 13.0063 10.6837C12.4554 11.7159 11.6699 12.5226 10.6498 13.1038C9.62977 13.6849 8.45985 13.9755 7.1401 13.9755C6.18964 13.9755 5.28458 13.7924 4.42493 13.4261C3.56528 13.0599 2.82368 12.565 2.20012 11.9414C1.57657 11.3179 1.08167 10.5763 0.715407 9.7166C0.349146 8.85695 0.166016 7.95189 0.166016 7.00143C0.166016 6.05097 0.349146 5.14591 0.715407 4.28626C1.08167 3.4266 1.57657 2.685 2.20012 2.06145C2.82368 1.4379 3.56528 0.942995 4.42493 0.576735C5.28458 0.210474 6.18964 0.0273438 7.1401 0.0273438C8.95627 0.0273438 10.5151 0.63576 11.8167 1.85259L9.91884 3.67784C9.17421 2.95743 8.24796 2.59722 7.1401 2.59722C6.35915 2.59722 5.63722 2.79397 4.97432 3.18748C4.31142 3.58098 3.78624 4.11523 3.3988 4.79024C3.01135 5.46525 2.81762 6.20231 2.81762 7.00143C2.81762 7.80054 3.01135 8.5376 3.3988 9.21261C3.78624 9.88762 4.31142 10.4219 4.97432 10.8154C5.63722 11.2089 6.35915 11.4056 7.1401 11.4056C7.66679 11.4056 8.1511 11.333 8.59304 11.1877C9.03497 11.0424 9.3982 10.8608 9.68274 10.6428C9.96727 10.4249 10.2155 10.1767 10.4274 9.89822C10.6393 9.61974 10.7951 9.35639 10.895 9.10818C10.9949 8.85997 11.063 8.62387 11.0993 8.39988H7.1401V6.00254Z"
          fill="#787A80"
        />
      </svg>
    </>
  );
};
const Authorization = (props) => {
  const icons = [<Facebook />, <Google />];
  const formValues = {
    email: "",
    password: "",
  };
  const validateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
      if (!values.password) {
        errors.password = "Required";
      }
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    console.log(values);
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    await axios
      .post(
        "https://nastya-db-tested.herokuapp.com/auth/login",
        values,
        headers
      )
      .then((response) => {
        if (response.data) {
          let success = document.getElementById("success");
          success.innerHTML = "You are logged in";
          console.log(response);
        }
      })
      .catch((error) => {
        const errorResponse = error.response;
        setErrors({ email: errorResponse.message });
        console.log("ERROR", errorResponse.request);
      });
  };
  return (
    <>
      <div
        className={`c-modal-authorization ${props.isOpened ? "open" : "close"}`}
      >
        <div className="c-modal-authorization__wrapper">
          <div className="c-modal-authorization__close-block">
            <div
              className="c-modal-authorization__close"
              onClick={props.onModalClose}
            >
              ✕
            </div>
          </div>
          <h3 className="c-modal-authorization__title">Sign Up</h3>
          <p className="c-modal-authorization__descr">
            Registration takes less than a minute but gives you full control
            over your orders.
          </p>
          <Formik
            initialValues={{ formValues }}
            validate={(values) => validateForm(values)}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => {
              return (
                <form
                  onSubmit={handleSubmit}
                  className="c-modal-authorization__form"
                >
                  <label className="c-modal-authorization__email">
                    Email
                    <input
                      className="c-modal-authorization__email-input"
                      type={"email"}
                      placeholder="Your working email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    ></input>
                  </label>
                  <p
                    style={{ textAlign: "center", height: "20px" }}
                    className="error"
                  >
                    {errors.email && touched.email && errors.email}
                  </p>
                  <label className="c-modal-authorization__password">
                    Password
                    <input
                      className="c-modal-authorization__password-input"
                      type={"password"}
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    ></input>
                  </label>
                  <p
                    style={{ textAlign: "center", height: "20px" }}
                    className="error"
                  >
                    {errors.password && touched.password && errors.password}
                  </p>

                  <p
                    style={{ textAlign: "center", height: "20px" }}
                    id="success"
                    className="c-modal-authorization__user-added"
                  ></p>
                  <button className="c-modal-authorization__btn " type="submit">
                    Sign Up
                  </button>
                  <p className="c-modal-authorization__change">
                    Don't have an account?{" "}
                    <span className="c-modal-authorization__change-sign-in">
                      Sign up
                    </span>
                  </p>
                </form>
              );
            }}
          </Formik>
          <div className="c-modal-authorization__divider"></div>
          <div className="c-modal-authorization__in-btn">
            <p className="c-modal-authorization__in-btn__text">
              Or sign in with
            </p>
            <div className="c-modal-authorization__btns">
              <Buttons cheldren={icons} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Authorization;
