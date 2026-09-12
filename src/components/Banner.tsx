import React from 'react';
import BannerImage from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className='flex justify-between items-center container mx-auto py-16'>
            <div className='w-1/2 '>
                <h1 className='text-7xl font-extrabold'>Build Your Ideal <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span></h1>
                <p className='text-[#475569] text-[18px] w-[576px] mb-12 mt-5'>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                <div className='flex gap-7'>
                    <button className='px-4 py-3 font-semibold text-white bg-gradient-to-r from-[#F97316] to-[#EC4899] rounded-lg cursor-pointer'>Explore Technologies</button>
                    <button className='px-10 py-3 font-semibold  border border-[#E5E7EB] rounded-lg cursor-pointer'>Learn More</button>
                </div>
            </div>

            <div className=''>
                <img src={BannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;