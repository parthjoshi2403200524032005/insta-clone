import React from 'react'
import { SimpleLayout } from '../../layouts/SimpleLayout'
import { useFormik } from 'formik'
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  phone: Yup.string().required('Phone number is required'),
  name: Yup.string().required("Name is required"),
  password: Yup.string().required("Password is required"),
  email: Yup.string().required("Email is required"),
  // email: Yup.string().matches(/^[\w-\.]+@simbaquartz.com$/, {
  //   message: "Invalid Email",
  // }),
})
function SignupScreen(props) {
  const signupUserForm = useFormik({
    initialValues: {
      phone: '',
      name: '',
      password: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.signupUser(values);
      signupUserForm.resetForm();
      // console.log(values);
    },
    validationSchema: validationSchema
  })
  return (
    <SimpleLayout>
      <form onSubmit={signupUserForm.handleSubmit}

        className='border-2 rounded p-10  mt-2 bg-white text-black shadow-md	' htmlFor="phone">
        <input
          id="phone"
          name="phone"
          type="text"
          placeholder='Phone number, username, or email address'
          className='border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md '
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
          placeholder='Full Name'
          className='border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md '
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
          placeholder='Email'
          className='border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md '
          onChange={signupUserForm.handleChange}
          onBlur={signupUserForm.handleBlur}
          value={signupUserForm.values.email}
        />
        {signupUserForm.touched.email && signupUserForm.errors.email ? (
          <div>{signupUserForm.errors.email}</div>
        ) : null} <br />
        <input
          id="password"
          name="password"
          type="password"
          placeholder='Password'
          className='border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md '
          onChange={signupUserForm.handleChange}
          onBlur={signupUserForm.handleBlur}
          value={signupUserForm.values.password}
        />
        <br />
        {signupUserForm.touched.password && signupUserForm.errors.password ? (
          <div>{signupUserForm.errors.password}</div>
        ) : null}
        <button
          type="submit"
          onClick={signupUserForm.handleSubmit}
          className='bg-sky-400 hover:bg-red-400 text-white font-bold py-1 px-4 rounded w-1/2 mt-2'
        //  className="bg-blue-500 text-white p-2 rounded-lg"
        >Signup</button>
      </form>
    </SimpleLayout>
  )
}

export default SignupScreen











































































































































































































































{/* <form>
      <main className='border-2 rounded p-10  mt-2 bg-white text-black shadow-md	'>
        <section>
          <h1>Instagram</h1>
          <p>Sign up to see photos and videos <br />from your friends.</p>
          <button className='bg-sky-400 hover:bg-red-400 text-white font-bold py-1 px-4 rounded w-full mt-2'>Log in with Facebook</button>

          <section className='flex'>
            <div className='w-1/2 m-2 h-0.5 bg-slate-300'></div>
            <div className='ml-0.5'>OR</div>
            <div className='w-1/2 m-2 h-0.5 bg-slate-300'></div>

          </section>
          <input type="text" placeholder='Phone number, username, or email address' className='border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md ' /> <br />
          <input type="text" placeholder='Full Name' className='border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md ' /> <br />
          <input type="text" placeholder='Username' className='border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md ' /> <br />
          <input type="password" placeholder='Password' className='border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md ' /><br /> <br />
          <p>People who use our service may have uploaded <br /> your contact information to Instagram. Learn more
          </p>
          <br /> <br />
          <p>By signing up, you agree to our Terms, Privacy <br />Policy and Cookies Policy.</p>
          <button className='bg-sky-400 hover:bg-red-400 text-white font-bold py-1 px-4 rounded w-full mt-2'>Sign Up</button>
        </section>
      </main>
      <section>
        <div className='mt-2 border-2 rounded p-4'>Don't have an account? <a href="/signup">Sign up</a></div>
      </section>
    </form> */}
