import React from 'react'
import IMGA from './Images/user1-free-img.jpg'
import IMGAG from './Images/user3-free-img.jpg'
import IMGAGE from './Images/testimonial-2.jpg'
export default class Sec5 extends React.Component {
  render() {
    return (
      <> 
      <div className='w-full h-[300px]  flex justify-evenly mt-[40px]'>
        <div className='w-[400px] h-[300px] '>
            <h1 className='text-4xl font-[25px] ml-[30px] mt-[40px]'>Need help in choosing the right plants?</h1>
             <h2 className='text-[13px] text-red-500 hover:text-gray-500 cursor-pointer font-semibold ml-[30px] mt-[60px]'>ASK FOR HELP</h2>
        </div>

        <div className='w-[650px]  h-[300px]'>
            <h1 className='text-[17px] font-[13px] mt-[40px]'>Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas sedurna malesuada consectetuer.</h1>
        <h2 className='text-[17px] mt-[30px]'>Ornare integer commodo mauris et ligula purus, praesent cubilia laboriosam viverra. Mattis id rhoncus. Integer lacus eu volutpat fusce. Elit etiam phasellus suscipit suscipit dapibus, condimentum tempor quis, turpis luctus dolor sapien vivamus.</h2>
        </div>

      </div>
      
      <div className='w-full h-[600px] flex justify-evenly mt-[60px]'>
      
      <div className='w-[550px] h-[590px]'>
      <h1 className='text-4xl ml-[40px] text-semibold mt-[40px] mt-[30px]'>Testimonials</h1>
      <h2 className='text xl mt-[50px] ml-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>

      <div className=' h-[430px] flex justify-evenly'>
        <div className='w-[230px] rounded-[20px] h-[280px]'>
        <img src={IMGA} alt=""  className='rounded-[20px] mt-[40px]'/>
        </div>
        <div className='w-[250px]'>
        <h1 className='text-[13x] text-black-300 mt-[80px]'>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </h1>
        <h2 className='text-2xl font-bold'>Sarah Jones</h2>
        <h3 className='text-gray-400'>Interior Designer</h3>
        </div>
        </div>
  </div>
      <div className=' w-[600px] '>
        <div className=' h-[300px] flex justify-evenly'>
        <div className='w-[230px] rounded-[20px] h-[280px]'>
        <img src={IMGAG} alt=""  className='rounded-[20px] '/>
        </div>
        <div className='w-[250px] '>
        <h1 className='text-[13x] text-black-300 '>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </h1>
        <h2 className='text-2xl font-bold'>Jessica Foxxs</h2>
        <h3 className='text-gray-400'>Student</h3>
        </div>
        </div>

        <div className=' h-[430px] flex justify-evenly'>
        <div className='w-[230px] rounded-[20px] h-[280px]'>
        <img src={IMGAGE} alt=""  className='rounded-[20px]'/>
        </div>
        <div className='w-[250px]'>
        <h1 className='text-[13x] text-black-300 '>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </h1>
        <h2 className='text-2xl font-bold'>Briana Luke</h2>
        <h3 className='text-gray-400'>Student</h3>
        </div>
        </div>
      </div>
      
      
      
      
      
      
      
      
      
      
      </div>
      
      
      
      
      
      </>
    )
  }
}
