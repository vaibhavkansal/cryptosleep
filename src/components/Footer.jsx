import React, { useRef } from 'react'
import { addForm } from '../utils/customfirebase';
import { Link } from 'react-router-dom';

const Footer = () => {
  const firstname = useRef(null);
  const lastname = useRef(null);
  const number = useRef(null);
  const message = useRef(null);

  function sendForm(){
    const fn = firstname.current.value;
    const ln = lastname.current.value;
    const no = number.current.value;
    const me = message.current.value;
    addForm({"firstName":fn,"lastName":ln,"number":no,"message":me});
    firstname.current.value = "";
    lastname.current.value = "";
    number.current.value = "";
    message.current.value = "";

  }
  return (
    <>

<section className="bg-white ">
    <div className="container px-6 py-12 mx-auto">
        <div>
            <p className="font-medium text-blue-500 text-xl">Contact us</p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">Chat to our friendly team</h1>

            <p className="mt-3 text-gray-500 ">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 className="mt-4 text-base font-medium text-gray-800 ">Email</h2>
                    <p className="mt-2 text-sm text-gray-500 ">Our friendly team is here to help.</p>
                    <p className="mt-2 text-sm text-blue-500 ">vaibhav.cryptosleep@gmail.com</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 ">Phone</h2>
                    <p className="mt-2 text-sm text-gray-500 ">Mon-Sun from 8am to 8pm.</p>
                    <p className="mt-2 text-sm text-blue-500 ">+91 73517 39555</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 ">Live chat</h2>
                    <p className="mt-2 text-sm text-gray-500 ">Our friendly team is here to help.</p>
                    <a className="mt-2 text-sm text-blue-500 "   target="_blank" href='https://wa.me/message/ODX6WCTZJEI3C1'>Start new chat</a>
                </div>

                <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 className="mt-4 text-base font-medium text-gray-800 ">Office</h2>
                    <p className="mt-2 text-sm text-gray-500 ">Come say hello at our office HQ.</p>
                    <p className="mt-2 text-sm text-blue-500 ">FF-11, Wave Galleria,Wave City, Ghaziabad, Uttar Pradesh, India</p>
                </div>

              
            </div>

            <div className="p-4 py-6 rounded-lg bg-gray-50  md:p-8">
                    <div className="mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm text-gray-600 ">First Name</label>
                            <input ref={firstname} type="text" placeholder="John " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm text-gray-600 ">Last Name</label>
                            <input ref={lastname} type="text" placeholder="Doe" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm text-gray-600 ">Mobile Number</label>
                        <input ref={number} type="number" placeholder="+91 9988776655" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm text-gray-600 ">Message</label>
                        <textarea ref={message} className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button onClick={sendForm} className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Send message
                    </button>
            </div>
        </div>
    </div>
</section>



    
        <div className="bg-black pt-5 pb-2">

          <div className="px-3 text-center text-white">
            <p className='text-3xl font-semibold'>INFORMATION</p>
            <div className=" md:flex md:justify-center">
              <div className="flex justify-between  md:gap-8 font-serif">
             
                <Link to="/mattress" className=' no-underline'><p className="md:text-xl text-white">Mattress</p></Link>
                <Link to="/about" className=' no-underline'><p className="md:text-xl text-white">about</p></Link>
                <Link to="/curtain" className=' no-underline'><p className="md:text-xl text-white">Curtains</p></Link>
       
              </div>
            </div>

            <div className="md:flex md:justify-center mt-10">
              <div className="flex flex-col md:flex-row px-3 sm:gap-5 md:gap-8 font-serif">
                <div className='flex'>
                    <a className="basis-1/2 md:text-xl text-white no-underline" href="https://merchant.razorpay.com/policy/PmTzc91QUf9q0L/shipping">Shipping Policy</a>
                    <a className="basis-1/2 md:text-xl text-white no-underline" href="https://merchant.razorpay.com/policy/PmTzc91QUf9q0L/refund">Return Policy</a>
                </div>

                <div className='flex'>
                    <a className="basis-1/2 md:text-xl text-white no-underline" href='https://merchant.razorpay.com/policy/PmTzc91QUf9q0L/privacy'>Privacy Policy</a>
                    <a className="basis-1/2 md:text-xl text-white no-underline" href='https://merchant.razorpay.com/policy/PmTzc91QUf9q0L/terms'>Terms & Conditions</a>
                </div>
               
 
                               
              </div>

            </div>

            <div className='flex justify-center'>
            <div className='flex my-3 justify-between'>
            <a target='_blank' href="https://www.instagram.com/cryptosleep.in?igsh=NTN0dWRza2pyM2Zq"><img src="../icons/facebook-svgrepo-com.svg" alt="" className='w-8 ms-4 mx-3'/></a>
            <a target='_blank' href="https://www.instagram.com/cryptosleep.in?igsh=NTN0dWRza2pyM2Zq"><img src="../icons/instagram-svgrepo-com.svg" alt="" className='w-8 mx-3'/></a>
            <a target='_blank' href="https://www.linkedin.com/company/cryptosleep/"><img src="../icons/linkedin-svgrepo-com.svg" alt="" className='w-8 mx-3'/></a>

                
              </div>
            </div>
          </div>
          <p className='text-center pt-3 text-white'>Copyright © 2024 CRYPTOSLEEP, All Rights Reserved.</p>

        </div>

       

    
      </>
      
  )
}

export default Footer