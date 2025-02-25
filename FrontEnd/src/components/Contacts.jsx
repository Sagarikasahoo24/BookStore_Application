import React from 'react'
import Navbar from './Navbar'

function Contacts() {
   
  return (
    <>
    <Navbar/>
    <div className='flex h-screen items-center justify-center border rounded-md outline-none '>
         <div className="w-[700px] ">
         <form>                        
            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input
                    type="text"
                    placeholder='Entaer Your FullName'
                    className='w-80 px-3 border rounded-md outline-none'
                />
            </div>
    
            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input
                    type="email"
                    placeholder='Email sddress'
                    className='w-80 px-3 border rounded-md outline-none'
                />  
            </div><br />

            <div>
                <span>Message</span>
                <br />
                <textarea className='border rounded-md outline-none' placeholder='Type your message...'  cols={40} rows={5}>
                
                </textarea>
            </div>

            <div className='justify-center mt-4'>
                <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>
                    Signup
                </button> 
            </div>
        </form>
    </div>
</div>
    </>
  )
}

export default Contacts

