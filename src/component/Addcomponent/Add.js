import React from 'react'
import Addshoe from "../Images/addshoe.svg"

const Add = () => {
  return (
    <div className='h-[650px]  flex items-center relative items-center  mt-[160px] bg-[#40BFFF]'>
 <div>
    <p className='w-[571px] ml-[131px] font-medium text-[55px] text-white flex'>
    Adidas Men Running
Sneakers
    </p>
    <p className=" text-2xl ml-[131px] pt-[23px] text-white font-normal">
    Performance and design. Taken right to the edge.
    </p>
    <button className='ml-[131px] text-white font-semibold pt-[12px] underline underline-offset-8  text-[20px]'>
     
     SHOP NOW 
    </button>

 </div>
 <div className='absolute top-[-180px] right-[0%]'>
    <img src={Addshoe}>
    </img>
 </div>
    </div>
  )
}

export default Add