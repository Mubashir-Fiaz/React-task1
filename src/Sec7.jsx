import React from 'react'
import NAT from './Images/nature.webp'
import { AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import { AiFillInstagram} from 'react-icons/ai'
import {  AiFillLinkedin} from 'react-icons/ai'
export default class Sec7 extends React.Component {
  render() {
    return (
      <>
      <div className='w-full h-[400px] flex justify-evenly  mt-[50px]'>
<div className='w-[250px] h-[380px] '>
  <div className='w-[180px] h-[180px] mx-auto border-2'>
    <img src={NAT} alt="" />
  </div>
  <h1 className='text-center text-4xl font-bold mt-[20px] text-gray-500'>Simply Nature</h1>
  <div className='flex justify-evenly mt-[20px]'>
  <div  className=' bg-gray-500 hover:bg-green-500 cursor-pointer w-[30px] h-[30px]'>
  < AiFillFacebook className='w-[30px] h-[30px] text-white'/>
  </div>
  <div  className=' bg-gray-500 hover:bg-green-500 cursor-pointer w-[30px] h-[30px]'>
  < AiFillTwitterCircle className='w-[30px] h-[30px] text-white'/>
  </div>
  <div  className=' bg-gray-500 hover:bg-green-500 cursor-pointer w-[30px] h-[30px]'>
  <  AiFillInstagram className='w-[30px] h-[30px] text-white'/>
  </div>
  <div  className=' bg-gray-500 hover:bg-green-500 cursor-pointer w-[30px] h-[30px]'>
  <  AiFillLinkedin className='w-[30px] h-[30px] text-white'/>
  </div>
  </div>


</div>
<div className='w-[250px]'>

  <h1 className='text-2xl ml-[40px] mt-[40px]'>Quick Links</h1>
  <ul className='style-none text-xl text-gray-600 ml-[40px] mt-[30px]'>
    <li className='mt-[15px]'>Introduction</li>
    <li className='mt-[15px]'>know more About Us</li>
    <li className='mt-[15px]'>Visit Store</li>
    <li className='mt-[15px]'>Let’s Connect</li>
  </ul>
</div>

<div className='w-[250px]'>

  <h1 className='text-2xl ml-[40px] mt-[40px]'>Important Links</h1>
  <ul className='style-none text-xl text-gray-600 ml-[40px] mt-[30px]'>
    <li className='mt-[15px]'>Privacy Policy</li>
    <li className='mt-[15px]'>Shipping Details</li>
    <li className='mt-[15px]'>Terms & Conditions</li>
    <li className='mt-[15px]'>Media Kit</li>
  </ul>
</div>
<div className='w-[350px]'>
  <h1 className='text-2xl mt-[40px] '>Get In Touch With Us For<br/> The Best Quality Plants & <br/>Succulents</h1>
<p className='text-gray-700 mt-[20px]'>Qui dolore ipsum quia dolor sit amet,<br/> consec tetur adipisci velit, sed quia <br/>non numquam eius modi tempora <br/>incidunt lores ta porro ame.</p>
</div>
      </div>
      </>
    )
  }
}
