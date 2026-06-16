import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>welcome to login page</h1>
    
    <input type="text"placeholder='username' />
    <br/>
    <input type="password" placeholder='password' />
    <br/>
    <button>login</button>
    <br></br>
      <h1 className='text-3x1 font-bold mb-6'>welcome to login page</h1>
          <input type="text"placeholder='username' className='border p-2'/>
    <br/>
    <input type="password" placeholder='password'className='border p-2' />
    <br/>
    <button className='bg-blue-500 px-4 py-1 text-white rounded'>login</button>
    </div>
  )
}

export default Login
