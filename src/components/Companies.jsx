import React from 'react';
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4 } from '../assets';

const Companies = () => {
  return (
    <div className='w-full bg-white py-[50px]'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <h1 className='text-center text-2xl font-bold text-[#536E96]'>Trusted by over 25,000 innovators and entrepreneurs worldwide.</h1>
            <p className='text-center text-[#536E96] text-xl'>Investi partners with leading companies to bring groundbreaking ideas to life.</p>
            <div className='flex justify-center py-8 md:gap-8 '>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
                  <img src={companyLogo1} alt="Company 1" />
                  <img src={companyLogo2} alt="Company 2" />
                  <img src={companyLogo3} alt="Company 3" />
                  <img src={companyLogo4} alt="Company 4" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Companies;
