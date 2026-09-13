import React from 'react';
import FooterLogo from "../assets/logo-text.png";


const Footer = () => {
    return (
        <div className='border-t border-[#F1F5F9]'>
            <div className='pt-16 pb-10 container mx-auto'>
                <div className='grid grid-cols-5 gap-8  mx-auto '>
                    <div className='col-span-2'>
                        <img src={FooterLogo} alt="" />

                        <p className='text-[#64748B] w-[484px] mt-2.5 mb-5'>Curated tools, technologies, and resources for developers building modern software.</p>

                        <div className='flex gap-3'>
                            <p>GitHub</p>
                            <p>Twitter</p>
                            <p>LinkedIn</p>
                        </div>
                    </div>

                    <div>
                        <h2 className='font-bold text-[#0F172A] mb-4'>PRODUCT</h2>

                        <ul className='text-[#64748B] flex flex-col gap-2.5'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Technologies</a></li>
                            <li><a href="#">Projects</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='font-bold text-[#0F172A] mb-4'>COMPANY</h2>

                        <ul className='text-[#64748B] flex flex-col gap-2.5'>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='font-bold text-[#0F172A] mb-4'>LEGAL</h2>

                        <ul className='text-[#64748B] flex flex-col gap-2.5'>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className='flex justify-between border-t border-[#F1F5F9] pt-6 mt-10'>
                    <h3>© 2026 Dev Stack. All rights reserved.</h3>

                    <div className='flex gap-2.5'>
                        <p>Privacy</p>
                        <p>Terms</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;