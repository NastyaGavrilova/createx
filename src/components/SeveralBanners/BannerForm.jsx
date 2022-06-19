import React from "react";
import { Formik } from "formik";
import "./_bannerForm.scss";
import axios from "axios";

const BannerForm = () => {
  const formValues = {
    email: "",
  };
  const validateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Success";
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
      .post("http://localhost:5000/api/posts", values, headers)
      .then((response) => {
        if (response.success) {
          document.getElementById("success").innerHTML = "User Added";
        }
      })
      .catch((error) => {
        const errorResponse = error.response.data;
        setErrors({ email: errorResponse.message.ua });
        console.log("ERROR", errorResponse.request);
      });
  };
  return (
    <>
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
        }) => (
          <form onSubmit={handleSubmit} className="c-banners-form">
            <span className="c-banners-form__text">Email</span>
            <div className="c-banners-form__block">
              <input
                type="email"
                name="email"
                value={values.email}
                placeholder="Your working email"
                className="c-banners-form--input"
              />
              <button
                className="c-banners-form--btn"
                type="submit"
                disabled={isSubmitting}
                onClick={(e) => e.preventDefault()}
              >
                <span className="c-banners-form--btn-txt">Subscribe</span>
              </button>
            </div>

            <p style={{ textAlign: "end", height: "20px" }} className="error">
              {errors.email && touched.email && errors.email}
            </p>
            <p className="c-banners-form__descr">
              *Sign up to be the first to hear about exclusive deals, special
              offers and upcoming collections.
            </p>
          </form>
        )}
      </Formik>
    </>
  );
};
export default BannerForm;
