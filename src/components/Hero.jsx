import React from 'react';
import { heroImg } from '../assets';
import { AiOutlineSearch } from 'react-icons/ai';
import { Companies, Courses, Achievement, Categories, Feedback, CTA } from '../components';  // Import the sections

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-0'>
          
          <div className='flex flex-col justify-start gap-4'>
            <p className='py-2 text-2xl text-[#20B486] font-medium'>INVEST IN YOUR SUCCESS</p>
            <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>
              Discover Over <span className='text-[#20B486]'>5000+</span> Investment Opportunities 
              from <span className='text-[#20B486]'>300</span> Trusted Investors
            </h1>
            <p className='py-2 text-lg text-gray-600'>
              Find the right opportunity and grow your business with guidance from top investors.
            </p>

            <form className='bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between'>
              <input 
                className='bg-white'
                type="text"
                placeholder='Release your dream'
              />
              <button>
                <AiOutlineSearch 
                  size={20}
                  className="icon"
                  style={{ color: '#000' }}
                />
              </button>
            </form>
          </div>

          <img src={heroImg} className="md:order-last order-first" />
        </div>
      </div>

      {/* Sections Below Hero */}
      <div className="sections">
        <Companies />
        <Courses />
        <Achievement />
        <Categories />
        <Feedback />
        <CTA />
      </div>
    </div>
  );
}

export default Hero;
