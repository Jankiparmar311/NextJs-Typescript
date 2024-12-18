"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { verifyOtp } from "./slice/loginSlice";
import Cookies, { cookieKeys } from "../../services/cookies";
import { useRouter } from "next/navigation";

interface InitialValues {
  otp: string;
}

const OtpPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const User = (Cookies?.get(cookieKeys.USER_ID) as string) || "";
  const initialValues: InitialValues = {
    otp: "",
  };

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    otp: Yup.string()
      .length(6, "OTP must be 6 digits")
      .required("OTP is required"),
  });

  console.log("User", typeof User);

  const onSubmit = (values: InitialValues) => {
    try {
      setLoading(true);
      dispatch(
        verifyOtp({
          authenticationCode: values?.otp,
          userId: User,
        })
      ).then((res) => {
        console.log("res", res);
        router.push("/dashboard");
      });
      // Assuming you handle OTP verification here
      console.log("OTP submitted:", values);
      // Replace with actual OTP verification logic
      setLoading(false);
    } catch (error) {
      console.log("Error:", error);
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
    <div>
      <div
        className="h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/bg_image.jpg')", // Background image URL
        }}
      >
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 mr-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            Enter the OTP
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="otp"
                className="block text-gray-700 font-medium mb-2"
              >
                OTP
              </label>
              <div className="mt-2">
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  placeholder="Enter OTP"
                  maxLength={6}
                  onChange={async (e) => {
                    await setFieldValue("otp", e.target.value);
                    await validateField("otp");
                  }}
                  value={values?.otp}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.otp && (
                  <div className="text-red-500 text-sm mt-1">{errors.otp}</div>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
