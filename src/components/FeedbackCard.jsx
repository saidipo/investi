import React from 'react'
import { avatar, quotationMark } from '../assets'

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <img src={avatar} alt="Investor" className="rounded-full" />
          <div>
            <h1>Alex Johnson</h1>
            <p>Investor</p>
          </div>
        </div>
        <img className='h-8' src={quotationMark} alt="Quotation" />
      </div>

      <div className='py-8'>
        <h3 className='text-lg'>
          "Investi has provided a unique platform for discovering promising entrepreneurs. The collaboration and innovation I've witnessed are truly inspiring. It's exciting to be part of the future of business development and to contribute to shaping new ventures."
        </h3>
      </div>
    </div>
  )
}

export default FeedbackCard
