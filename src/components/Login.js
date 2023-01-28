import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function SignUp() {
  const schema = yup.object().shape({
    email_logIn: yup.string().required("Enter Valid Email!"),
    password_logIn: yup
      .string()
      .min(4)
      .max(10)
      .required("Enter Correct Password"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <div className="login">
          <div>
            <h5>Log In to your Raju Academy!</h5>
            <hr />
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email_logIn"
                aria-describedby="emailHelp"
                placeholder="Email"
                {...register("email_logIn")}
              />
            </div>
            <p>{errors.email_logIn?.message}</p>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password_logIn"
                placeholder="Password"
                {...register("password_logIn")}
              />
            </div>
            <p>{errors.password_logIn?.message}</p>
            <div className="button">
              <button type="submit" id="log_in" className="btn btn-primary">
                Log In
              </button>
            </div>
            <div className="forgot-password">
              <p className="FP">
                or <u className="color">Forgot Password</u>
              </p>
            </div>
            <hr />
            <span className="acc">
              Don't have an account?
              <NavLink to="/sign-up" className="sign-up">
                Sign-Up
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}
