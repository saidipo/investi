import React from 'react'
import CategoryCard from './CategoryCard'
import {FaBusinessTime} from 'react-icons/fa'  // Business
import {AiOutlineBank} from 'react-icons/ai'   // Finance
import {IoMdPeople} from 'react-icons/io'      // Entrepreneurship
import {BsGraphUp} from 'react-icons/bs'        // Growth/Investment
import {RiMoneyDollarCircleLine} from 'react-icons/ri'  // Money/Investment
import {GiAchievement} from 'react-icons/gi'    // Success/Achievement
import {MdBusinessCenter} from 'react-icons/md' // Corporate
import {BiCategoryAlt} from 'react-icons/bi'    // Categories/Ideas
import {FaUniversity} from 'react-icons/fa'     // Education/University
import {FiBarChart} from 'react-icons/fi'       // Analytics

const Categories = () => {
  return (
    <div className='w-full bg-[#F0FBF7] py-24'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
                <h1 className='md:leading-[72px] text-3xl font-bold'>Most <span className='text-[#20B486]'>Popular Categories</span></h1>
                <p className='text-lg text-gray-600'>Explore the categories that connect investors with innovative ideas.</p>
                
                <div className='grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-1'>
                    <CategoryCard  icons={<FaBusinessTime size={30} />} title={'Business'} />
                    <CategoryCard icons={<AiOutlineBank size={30} />} title={'Finance'} />
                    <CategoryCard icons={<IoMdPeople size={30} />} title={'Entrepreneurship'} />
                    <CategoryCard icons={<BsGraphUp size={30} />} title={'Growth'} />

                    <CategoryCard icons={<RiMoneyDollarCircleLine size={30} />} title={'Investment'} />
                    <CategoryCard icons={<GiAchievement size={30} />} title={'Success'} />
                    <CategoryCard icons={<MdBusinessCenter size={30} />} title={'Corporate'} />
                    <CategoryCard icons={<BiCategoryAlt size={30} />} title={'Ideas'} />

                    <CategoryCard icons={<FaUniversity size={30} />} title={'Education'} />
                    <CategoryCard icons={<FiBarChart size={30} />} title={'Analytics'} />
                </div>
        </div>
    </div>
  )
}

export default Categories
