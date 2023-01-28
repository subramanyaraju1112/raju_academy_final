import React from "react";
import "./SignUp.css";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function SignUp() {
  const schema = yup.object().shape({
    full_name: yup.string().required("Your Full Name Is Required!"),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(10).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match")
      .required(),
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
        <div className="sign_up">
          <div>
            <h5>Sign-Up and start learning.</h5>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="full_name"
                aria-describedby="emailHelp"
                placeholder="Full Name"
                {...register("full_name")}
              />
            </div>
            <p>{errors.full_name?.message}</p>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                {...register("email")}
              />
            </div>
            <p>{errors.email?.message}</p>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                {...register("password")}
              />
            </div>
            <p>{errors.password?.message}</p>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
            </div>
            <p>{errors.confirmPassword?.message}</p>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Send me special offers, personalised recommendations, and
                learning tips.
              </label>
            </div>
            <div className="button">
              <button
                id="sign_up_btn"
                type="submit"
                className="btn btn-primary"
              >
                Sign-Up
              </button>
            </div>
            <p>
              By signing up, you agree to our <u>Terms of Use</u> and{" "}
              <u> Privacy Policy.</u>
            </p>
            <hr />
            <span className="acc">
              Already have an account?
              <NavLink className="color" to="/login">
                Log In
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}
