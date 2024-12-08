import React from 'react'
import { achievement } from '../assets'
import { SlGraduation } from 'react-icons/sl'
import { FaProjectDiagram } from 'react-icons/fa'  // Changed to general project icon
import { SlPeople } from 'react-icons/sl'
import { FaDollarSign } from 'react-icons/fa'
import { RiTeamFill } from 'react-icons/ri'

const Achievement = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-center '>
                <h1 className='md:leading-[72px] text-3xl font-bold'>We Help You<span className='text-[#20B486]'> Release Your Dream</span></h1>
                <p className='text-lg text-gray-600'>Investi bridges the gap between ambitious entrepreneurs and investors, providing a platform where innovative ideas can find the support they need to grow into successful ventures, shaping the future of business and technology.</p>
                
                <div className='grid grid-cols-2 py-16'>
                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#E9F8F3] rounded-xl'>
                            <SlPeople 
                                size={30}
                                style={{color:'#1A906B'}}  // Icon for investors
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>300</h1>
                            <p className='text-[#6D737A]'>Investors</p>
                        </div>
                    </div>

                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#FFFAF5] rounded-xl'>
                            <FaProjectDiagram 
                                size={30}
                                style={{color:'#FFC27A'}}  // Changed to general project icon
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>1000+</h1>
                            <p className='text-[#6D737A]'>Released Projects</p>
                        </div>
                    </div>

                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#FFEEF0] rounded-xl'>
                            <FaDollarSign  
                                size={30}
                                style={{color:'#ED4459'}}
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>20M+</h1>
                            <p className='text-[#6D737A]'>in investments</p>
                        </div>
                    </div>

                    <div className='py-6 flex'>
                        <div className='p-4 bg-[#F0F7FF] rounded-xl'>
                            <RiTeamFill  
                                size={30}
                                style={{color:'#0075FD'}}
                            />
                        </div>
                        <div className='px-3'>
                            <h1 className='text-2xl font-semibold'>1,000+</h1>
                            <p className='text-[#6D737A]'>Entrepreneurs</p>
                        </div>
                    </div>
                </div>
           </div>
            
            <img  src={achievement} className="m-auto md:order-last  order-first" />
        </div>
    </div>
  )
}

export default Achievement
