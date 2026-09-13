import Logo from "../assets/logo-text.png"


const Nav = () => {
    return (

        <nav className='sticky top-0 z-50 bg-white border-b border-[#F1F5F9]'>
            <div className='flex justify-between container mx-auto py-6'>
                <img src={Logo} alt="" className="w-[139px] object-contain cursor-pointer"/>

                <ul className='flex gap-7 font-[500] items-center'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#home">Technologies</a></li>
                    <li><a href="#home">Projects</a></li>
                    <li><a href="#home">About</a></li>
                    <li><a href="#home">Contact</a></li>
                </ul>

                <div className='flex gap-5'>
                    <button className='cursor-pointer'>Sign In</button>
                    <button className='px-5 py-2.5 rounded-[999px] bg-[#D91B7E] text-white font-semibold cursor-pointer'>Sign Up</button>
                </div>
            </div>

        </nav>

    );
};

export default Nav;