import React from 'react'
import IMG1 from './Images/cactus2-free-img.jpg'

export default class Nav extends React.Component {
  render() {
    return (
      <>
      <div className='w-full h-[60px]   flex justify-evenly align-center nav'>
<div className='w-[200px] h-[50px]   flex align-center justify-evenly sm:ml-0 md:ml-[-140px]'>
 
  <img src={IMG1} alt="" />
  <h1 className='mt-[9px] text-xl font-semibold '>Simply Nature</h1>  

</div>
<div >
<ul className='flex gap-6 mt-[9px]  h-full text-xl ml-[100px]'>
  <li>Home</li>
  
  <li>Store 
    
  </li>
  <li>About Us</li>
  <li>Contact Us</li>
  <li>My Account</li>
</ul>
</div>
<div>
  <h1 className='text-red-500 mt-[9px] text-xl'>$00.0</h1>
</div>

      </div>
      </>
    )
  }
}
