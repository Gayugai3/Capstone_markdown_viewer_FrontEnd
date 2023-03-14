import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faKey,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { config } from "../config";
import * as yup from "yup";

function ChangePassword() {
  let navigate = useNavigate();
  const { email } = useParams();
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        password1: "",
        password2: "",
      },
      validationSchema: yup.object({
        // username: yup.string().required().min(3),
        // email: yup.string().email().required(),
        password1: yup.string().required().min(8),
        password2: yup.string().required().min(8),
      }),

      onSubmit: async (values) => {
        try {
          const register = await axios.post(
            `${config.api}/user/changepassword/${email}`,
            values
          );
          console.log(register.data);
          alert(register.data.message);
          navigate("/");
        } catch (error) {
          console.log(error);
          alert(error.response.data.message);
        }
      },
    });
  return (
    <section class="vh-100" style={{ backgroundColor: "#eee" }}>
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style={{ borderRadius: "25px" }}>
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Change Your Password
                    </p>

                    <form onSubmit={handleSubmit} class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon icon={faLock} className="fa-lg me-3" />
                        <div class="form-outline flex-fill mb-0">
                          <TextField
                            label="Password"
                            type="password"
                            name="password1"
                            className="form-control form-control-lg"
                            value={values.password1}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              touched.password1 && errors.password1
                                ? true
                                : false
                            }
                            helperText={
                              touched.password1 && errors.password1
                                ? errors.password1
                                : null
                            }
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon icon={faKey} className="fa-lg me-3" />
                        <div class="form-outline flex-fill mb-0">
                          <TextField
                            label="Password"
                            type="password"
                            name="password2"
                            className="form-control form-control-lg"
                            value={values.password2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              touched.password2 && errors.password2
                                ? true
                                : false
                            }
                            helperText={
                              touched.password2 && errors.password2
                                ? errors.password1
                                : null
                            }
                          />
                        </div>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <Button
                          variant="contained"
                          type="submit"
                          // onClick={() => navigate("/")}
                        >
                          Submit
                        </Button>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChangePassword;
