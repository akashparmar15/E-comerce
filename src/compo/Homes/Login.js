import React from 'react'

const Login = () => {
  return (
    <div className='login-pag bg-red-300 mx-auto py-20 flex justify-center items-center'>
      <div className="login-container p-8 container mx-auto bg-white w-4/12">
        <h1 className='font-bold pb-4 text-2xl'>Sign Up</h1>
        <div className="login-fields">
          <input className=' py-3 px-4 w-full border-2' type="text" placeholder='Enter Your Name' /> <br />
          <input className=' py-3 px-4 my-5 w-full border-2' type="email" placeholder='Akash122@gmail.com' /> <br></br>
          <input className=' py-3 px-4 w-full border-2' type="password" placeholder='Enter Your Password' /> <br/>
        </div>
        <button className='bg-red-500 text-white w-full py-3  my-5'>Continue</button>
        <p className='already-account mb-3'>Already have an Account? <span className='text-red-500 font-semibold'>Login Here</span></p>
        <div className="login-agree flex gap-3">
          <input type="checkbox" />
          <p>By Continuing, I agree to the terms of use & privacy policy. </p>
        </div>
      </div>
    </div>
  )
}

export default Login
