import React from 'react'
import {PiPottedPlantDuotone}from "react-icons/pi";
import { GiPlantsAndAnimals}from "react-icons/gi";
import { GiRecycle}from "react-icons/gi";

export default class Sec2 extends React.Component {
  render() {
    return (
   <>
                <div  className='w-full h-[70px]  flex justify-around mt-[40px]'>
       <div className='w-[300px] h-[70px] gap-6 flex'>
        <div className=''>
       <PiPottedPlantDuotone className='text-[30px] mt-[17px] text-green-500'/>
     </div>
     <div>
    <h1 className='text-xl font-semibold'>Plants Collection </h1>
    <h2 className='text-xl'>Any plants for your space</h2>
    </div>
    </div>

    <div className='w-[300px] h-[70px] gap-6 flex'>
        <div>
       < GiPlantsAndAnimals className='text-[30px] mt-[17px] text-green-500'/>
     </div>
     <div>
    <h1 className='text-xl font-semibold'>Free Shipping</h1>
    <h2 className='text-xl'>Free shipping on order</h2>
    </div>
    </div>
    <div className='w-[300px] h-[70px] gap-6  flex'>
        <div>
       < GiRecycle className='text-[30px] mt-[17px] text-green-500'/>
     </div>
     <div>
    <h1 className='text-xl font-semibold'>100% Money Back</h1>
    <h2 className='text-xl'>If the did't suit you</h2>
    </div>
    </div>

      </div>
   
   
   
   </>
    )
  }
}
