import React from 'react'
import { useRouter } from 'next/navigation';

import { useStateContext } from '@/context';
function Navbar() {
  const router=useRouter();
  const {address,connect}=useStateContext();
  const clickHandler = () => {
    if (!address){
      connect();
    }
   
  }
  return (
    <div className='bg-neutral-800 h-[8vh] w-full top-0 rounded-2xl p-1 px-2 flex justify-between '>
      
      <div className="flex justify-start">
  <div className="relative w-[20vw]">
    <input
      type="text"
      className="w-full py-3 px-4 text-white bg-neutral-900 border border-neutral-700 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-transparent placeholder-neutral-400 transition-all duration-300 ease-in-out"
      placeholder="Search..."
    />
    <button
      className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-neutral-800 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-neutral-700"
    >
      🔍
    </button>
  </div>
</div>


    <div className="flex ">
  <button onClick={clickHandler()} className="h-12 animate-shimmer items-center rounded-md border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors hover:text-white ">
    Connect
  </button>
</div>


  
        
      
      
    </div>
  )
}

export default Navbar
