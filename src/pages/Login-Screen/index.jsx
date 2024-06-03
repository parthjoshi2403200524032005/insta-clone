import React from 'react'
// import { SimpleLayout } from '../../layouts/SimpleLayout'

function Login() {
  return (
    // <SimpleLayout>
    <div>
      <main className='	border-2 rounded p-10  mt-2 bg-white text-black shadow-md	' >
        <div className=''>
          <h1 className='p-8'>Instagram</h1>
          <input type="text" placeholder='Phone number, username, or email address' className='border-2 rounded p-4 md:p-2 mt-2 bg-white text-black w-full' /><br />
          <input type="text" placeholder='Password' className='border-2 rounded p-4 md:p-2 mt-2 bg-white text-black w-full' /> <br />
          <button className='bg-sky-400	 hover:bg-red-400 text-white font-bold py-2 px-4 rounded w-full mt-2'>Log in</button>
          <section className='flex'>
            <div className='w-1/2 m-2 h-0.5 bg-slate-300'></div>
            <div className='ml-0.5'>OR</div>
            <div className='w-1/2 m-2 h-0.5 bg-slate-300'></div>

          </section>
          <div className='mt-2text-blue-500'><a href='https://rb.gy/lblvma'>Log in with Facebook</a></div>
          <div className='mt-2 text-blue-500'><a href='https://rb.gy/440lob'>Forgetton Your Password? </a></div>

        </div>

      </main>
      <section>
        <div className='mt-2 border-2 rounded p-4'>Don't have an account? <a href="/signup">Sign up</a></div>
      </section>
    </div>

  )
}

export default Login