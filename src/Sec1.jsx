import React from 'react'
import Nav  from './Nav'
export default class Sec1 extends React.Component {
  render() {
    return (
      <>
    
      <div className='w-full h-[600px] first sec1 border-black  '>  <Nav/>
      <h1 className='text-2xl font-semibold ml-[40px] mt-[30px]'>Best Quality Plant</h1>
      <h2 className='text-6xl font-bold ml-[35px] mt-[40px]'>Amazing Variety<br/> Of Plants Starting<br/> Just $6</h2>
        <button className='w-[150px] h-[40px] rounded-[20px] bg-red-500 ml-[35px] teaxt-xl font-semibold text-white mt-[70px]'>Shop Now</button>
      </div>
      
      
      
      </>
    )
  }
}
