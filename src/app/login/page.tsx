"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { getLogin } from "./slice/loginSlice";
import { AppDispatch } from "../../store";
import { encryptString } from "../../utils";
import OtpPage from "./OtpPage";

interface InitialValues {
  email: string;
  password: string;
  deviceToken: string;
  platform: string;
  appVersion: string;
  osVersion: string;
  model: string;
}

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isVerifyOtp, setIsVerifyOtp] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: InitialValues = {
    email: "",
    password: "",
    deviceToken: "",
    platform: "web",
    appVersion: "",
    osVersion: "",
    model: "",
  };

  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = (values: InitialValues) => {
    try {
      setLoading(true);
      dispatch(
        getLogin({
          ...values,
          password: encryptString(values?.password?.trim()),
        })
      ).then((res) => {
        console.log("res", res);
        if (res?.meta?.requestStatus === "fulfilled") {
          setLoading(false);
          setIsVerifyOtp(true);
        } else {
          setLoading(false);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const { values, errors, handleSubmit, setFieldValue, validateField } =
    useFormik<InitialValues>({
      initialValues,
      validationSchema,
      onSubmit,
      validateOnChange: false,
      validateOnMount: false,
    });

  return (
    <>
      {isVerifyOtp ? (
        <OtpPage />
      ) : (
        <div
          className="h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg_image.jpg')",
          }}
        >
          <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
              Sign in to your account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  onChange={async (e) => {
                    await setFieldValue("email", e.target.value);
                    await validateField("email");
                  }}
                  value={values?.email}
                  className="mt-2 w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </div>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  onChange={async (e) => {
                    await setFieldValue("password", e.target.value);
                    await validateField("password");
                  }}
                  value={values?.password}
                  className="mt-2 w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500"
                />
                {errors.password && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </div>
                )}
              </div>

              {/* Forgot Password & Submit */}
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className={`w-full py-3 text-white font-bold rounded-md transition ${
                  loading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
