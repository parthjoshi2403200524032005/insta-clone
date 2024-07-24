import React, { useState, useEffect } from "react";
import { SimpleLayout } from "../../layouts/SimpleLayout";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  password: Yup.string().required("Password is required"),
  email: Yup.string().required("Email is required"),
});

function LoginScreen(props) {
  const [savedUser, setSavedUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setSavedUser(JSON.parse(userData));
    }
  }, []);

  const loginUserForm = useFormik({
    initialValues: {
      email: savedUser ? savedUser.email : "",
      password: savedUser ? savedUser.password : "",
    },
    onSubmit: (values) => {
      // Save the login data to local storage
      localStorage.setItem('user', JSON.stringify(values));

      // Call the loginUser function passed via props
      props.loginUser(values);
      loginUserForm.resetForm();
    },
    validationSchema: validationSchema,
  });

  return (
    <SimpleLayout>
      <form onSubmit={loginUserForm.handleSubmit} className=" text-center ml-[450px] mt-[200px]">
        <div className="border-2 rounded p-10 mt-2 bg-white text-black shadow-md ">
          <h1 className="p-8">Instagram</h1>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Phone number, username, or email address"
            className="border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md text-sm"
            onChange={loginUserForm.handleChange}
            onBlur={loginUserForm.handleBlur}
            value={loginUserForm.values.email}
          />
          {loginUserForm.touched.email && loginUserForm.errors.email ? (
            <div>{loginUserForm.errors.email}</div>
          ) : null}
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md text-sm"
            onChange={loginUserForm.handleChange}
            onBlur={loginUserForm.handleBlur}
            value={loginUserForm.values.password}
          />
          {loginUserForm.touched.password && loginUserForm.errors.password ? (
            <div>{loginUserForm.errors.password}</div>
          ) : null}
          <button
            type="submit"
            className="bg-sky-400 hover:bg-red-400 text-white font-bold py-1 px-4 rounded-lg w-full my-3"
          >
            Login
          </button>
          <section className="flex">
            <div className="w-1/2 m-2 h-0.5 bg-slate-300"></div>{" "}
            <div className="ml-0.5">OR</div>
            <div className="w-1/2 m-2 h-0.5 bg-slate-300"></div>
          </section>
          <div className="mt-2 text-black">
            <Link to="https://bit.ly/3RcM2ve">Log in with Facebook</Link>
          </div>
          <div className="mt-4 text-gray-400 text-xs"> 
            <Link to="https://bit.ly/4c2r0Hy" className="text-black">
              Forgot Password?
            </Link>
          </div>
        </div>
        <section>
          <div className="mt-2 border-2 rounded p-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-sky-400">
              Sign up
            </Link>
          </div>
        </section>
      </form>
    </SimpleLayout>
  );
}

export default LoginScreen;
