import React from 'react'
// import { SimpleLayout } from '../../layouts/SimpleLayout'
import { Link } from 'react-router-dom'
function Login() {
  return (
    // <SimpleLayout>
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