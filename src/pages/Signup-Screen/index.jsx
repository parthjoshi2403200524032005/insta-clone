import React from "react";
import { SimpleLayout } from "../../layouts/SimpleLayout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be at least 10 digits"),
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
});

function SignupScreen(props) {
  const signupUserForm = useFormik({
    initialValues: {
      phone: "",
      name: "",
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      props.signupUser(values);
      signupUserForm.resetForm();
    },
    validationSchema: validationSchema,
  });

  return (
    <SimpleLayout>
      <form onSubmit={signupUserForm.handleSubmit} className="ml-[400px] mt-[60px] text-center">
        <div className="border-2 rounded p-10 mt-2 bg-white text-black shadow-md w-[600px] h-[700px]">
          <h1 className="p-8">Instagram</h1>
          <p className="p-2 font-mono text-gray-500">
            Sign up to see photos and videos <br /> from your friends.
          </p>
          <button
            type="button"
            className="bg-blue-500 hover:bg-red-400 text-white font-bold py-1 px-4 rounded-lg w-full my-4"
          >
            Log in with Facebook
          </button>
          <section className="flex">
            <div className="w-1/2 m-2 h-0.5 bg-slate-300"></div>{" "}
            <div className="ml-0.5">OR</div>
            <div className="w-1/2 m-2 h-0.5 bg-slate-300"></div>
          </section>
          <div className="relative mb-4">
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="Phone number, username, or email address"
              className={`border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md text-sm ${
                signupUserForm.touched.phone && signupUserForm.errors.phone
                  ? "border-red-500"
                  : ""
              }`}
              onChange={signupUserForm.handleChange}
              onBlur={signupUserForm.handleBlur}
              value={signupUserForm.values.phone}
            />
            {signupUserForm.touched.phone && signupUserForm.errors.phone && (
              <div className="absolute text-red-500 text-xs">{signupUserForm.errors.phone}</div>
            )}
          </div>
          <div className="relative mb-4">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Full Name"
              className={`border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md text-sm ${
                signupUserForm.touched.name && signupUserForm.errors.name
                  ? "border-red-500"
                  : ""
              }`}
              onChange={signupUserForm.handleChange}
              onBlur={signupUserForm.handleBlur}
              value={signupUserForm.values.name}
            />
            {signupUserForm.touched.name && signupUserForm.errors.name && (
              <div className="absolute text-red-500 text-xs">{signupUserForm.errors.name}</div>
            )}
          </div>
          <div className="relative mb-4">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className={`border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md text-sm ${
                signupUserForm.touched.email && signupUserForm.errors.email
                  ? "border-red-500"
                  : ""
              }`}
              onChange={signupUserForm.handleChange}
              onBlur={signupUserForm.handleBlur}
              value={signupUserForm.values.email}
            />
            {signupUserForm.touched.email && signupUserForm.errors.email && (
              <div className="absolute text-red-500 text-xs">{signupUserForm.errors.email}</div>
            )}
          </div>
          <div className="relative mb-4">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className={`border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md text-sm ${
                signupUserForm.touched.password && signupUserForm.errors.password
                  ? "border-red-500"
                  : ""
              }`}
              onChange={signupUserForm.handleChange}
              onBlur={signupUserForm.handleBlur}
              value={signupUserForm.values.password}
            />
            {signupUserForm.touched.password && signupUserForm.errors.password && (
              <div className="absolute text-red-500 text-xs">{signupUserForm.errors.password}</div>
            )}
          </div>
          <p className="text-gray-500 text-xs mt-[30px]">
            People who use our service may have uploaded <br />
            your contact information to Instagram.{" "}
            <span className="text-sky-700">Learn more</span>
          </p>
          <p className="text-gray-500 text-xs mt-8">
            By signing up, you agree to our
            <span className="text-sky-700">
              Terms, Privacy <br />
            </span>
            Policy and Cookies Policy.
          </p>
          <button
            type="submit"
            className="bg-sky-400 hover:bg-red-400 text-white font-bold py-1 px-4 rounded-lg w-1/2 mt-2"
          >
            Signup
          </button>
        </div>
        <section>
          <div className="mt-2 border-2 rounded p-4">
            Have an account?{" "}
            <Link to="/login" className="text-sky-400">
              Log in
            </Link>
          </div>
        </section>
      </form>
    </SimpleLayout>
  );
}

export default SignupScreen;
