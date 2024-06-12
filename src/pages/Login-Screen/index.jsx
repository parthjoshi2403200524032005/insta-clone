

import React from 'react'
// import { SimpleLayout } from '../../layouts/SimpleLayout'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div>
      <main className='	border-2 rounded p-10  mt-2 bg-white text-black shadow-md	' >
        <div className=''>
          <h1 className='p-8'>Instagram</h1>
          <input type="text" placeholder='Phone number, username, or email address' className='border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md' /><br />
          <input type="password" placeholder='Password' className='border-2 rounded p-2 md:p-2 mt-2 bg-white text-black w-full shadow-md' /> <br />
          <button  className='bg-sky-400	 hover:bg-red-400 text-white font-bold py-1 px-4 rounded w-full mt-2 '>Log in</button>
          <section className='flex'>
            <div className='w-1/2 m-2 h-0.5 bg-slate-300'></div>
            <div className='ml-0.5'>OR</div>
            <div className='w-1/2 m-2 h-0.5 bg-slate-300'></div>

          </section>
          <div className='mt-2text-black'><Link to="https://bit.ly/3RcM2ve">Log in with Facebook</Link></div>
          <div className='mt-4 text-gray-400'><Link to='https://bit.ly/4c2r0Hy'>Forgetton Your Password? </Link></div>
        </div>

      </main>
      <section>
        <div className='mt-2 border-2 rounded p-4'>Don't have an account? <a href="/signup">Sign up</a></div>
      </section>
    </div>

  )
}

export default Login






































































































// import react ,{useState} from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const validationSchema=Yup.object().shape({
//    id:Yup.String().required("Id is required"),
//    name:Yup.String().required("Name is required"),
//    email: Yup.string().matches(/^[\w-\.]+@alexa.com$/, {
//     message: "Invalid Email",
//   }),
//   phone:Yup.String().required("Phone number is required"),
//   password:Yup.String().required("Password is required"),
//   confirmPassword: Yup.String().required("Confirm password is required"),
// });
// function Login() {
//   const formik = useFormik({
//     initialValues: {
//       id: "",
//       name: "",
//       email: "",
//       phone: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });
//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <div>
//           <label htmlFor="id">Id</label>
//           <input
//             id="id"
//             name="id"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.id}    
//           />
//           {formik.touched.id && formik.errors.id ? (
//             <div>{formik.errors.id}</div>
//           ) : null}
//         </div>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.name}
//           />
//           {formik.touched.name && formik.errors.name ? (
//             <div>{formik.errors.name}</div>
//           ) : null}
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             id="email"
//             name="email"  
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.email} 
//           />
//           {formik.touched.email && formik.errors.email ? (
//             <div>{formik.errors.email}</div>
//           ) : null}
//         </div>
//         <div>
//           <label htmlFor="phone">Phone</label>
//           <input
//             id="phone"
//             name="phone"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.phone}
//           />
//           {formik.touched.phone && formik.errors.phone ? (
//             <div>{formik.errors.phone}</div>
//           ) : null}
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.password}  
//           />
//           {formik.touched.password && formik.errors.password ? (
//             <div>{formik.errors.password}</div>
//           ) : null}
//         </div>
//         <div>
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             id="confirmPassword"
//             name="confirmPassword"
//             type="password"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.confirmPassword}
//           />
//           {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
//             <div>{formik.errors.confirmPassword}</div>
//           ) : null}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Login;