import React from 'react' 
import Icons from './Icons'


const LoginButton = () => {
  return (
    <button className='flex items-center py-3.5 px-4 bg-green-mantis text-black gap-2 rounded-2xl'>
        <Icons height={16} width={16} icon='wallet-02' />
        <p>Login</p>
    </button>
  )
}

export default LoginButton