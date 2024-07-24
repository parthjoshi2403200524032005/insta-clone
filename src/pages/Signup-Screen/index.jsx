import React from "react";
import { SimpleLayout } from "../../layouts/SimpleLayout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
const validationSchema = Yup.object().shape({
  phone: Yup.string().required("Phone number is required"),
  name: Yup.string().required("Name is required"),
  password: Yup.string().required("Password is required"),
  email: Yup.string().required("Email is required"),
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
      <form onSubmit={signupUserForm.handleSubmit} className=" ml-[400px] mt-[80px] text-center">
        <div className="border-2 rounded p-10  mt-2 bg-white text-black shadow-md">
          <h1 className="p-8">Instagram</h1>
          <p className="p-2 font-mono text-gray-500" >
            Sign up to see photos and videos <br /> from your friends.
          </p>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-red-400 text-white font-bold py-1 px-4 rounded-lg w-full my-4"
          >
            Log in with Facebook
          </button>
          <section className="flex">
            <div className="w-1/2 m-2 h-0.5 bg-slate-300"></div>{" "}
            <div className="ml-0.5">OR</div>
            <div className="w-1/2 m-2 h-0.5 bg-slate-300"></div>
          </section>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="Phone number, username, or email address"
            className="border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md text-sm "
            onChange={signupUserForm.handleChange}
            onBlur={signupUserForm.handleBlur}
            value={signupUserForm.values.phone}
          />
          {signupUserForm.touched.phone && signupUserForm.errors.phone ? (
            <div>{signupUserForm.errors.phone}</div>
          ) : null}
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Full Name"
            className="border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md text-sm  "
            onChange={signupUserForm.handleChange}
            onBlur={signupUserForm.handleBlur}
            value={signupUserForm.values.name}
          />
          {signupUserForm.touched.name && signupUserForm.errors.name ? (
            <div>{signupUserForm.errors.name}</div>
          ) : null}
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            className="border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md text-sm "
            onChange={signupUserForm.handleChange}
            onBlur={signupUserForm.handleBlur}
            value={signupUserForm.values.email}
          />
          {signupUserForm.touched.email && signupUserForm.errors.email ? (
            <div>{signupUserForm.errors.email}</div>
          ) : null}{" "}
          <br />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md text-sm"
            onChange={signupUserForm.handleChange}
            onBlur={signupUserForm.handleBlur}
            value={signupUserForm.values.password}
          />
          <br />
          {signupUserForm.touched.password && signupUserForm.errors.password ? (
            <div>{signupUserForm.errors.password}</div>
          ) : null}
          <p className="text-gray-500 text-xs">
            People who use our service may have uploaded <br />
            your contact information to Instagram.{" "}
            <span className="text-sky-700">Learn more</span>
          </p>
          <p className="text-gray-500 text-xs mt-8">
            By signing up, you agree to our
            <span className="text-sky-700">
              Terms,Privacy <br />
            </span>
            Policy and Cookies Policy. <span></span>
          </p>
          <button
            type="submit"
            onClick={signupUserForm.handleSubmit}
            className="bg-sky-400 hover:bg-red-400 text-white font-bold py-1 px-4 rounded-lg w-1/2 mt-2"
            //  className="bg-blue-500 text-white p-2 rounded-lg"
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

