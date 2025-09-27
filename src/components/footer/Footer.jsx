import React from 'react';
import Container from '../container/Container';

const Footer = () => {
    return (
        <>
        <footer className='bg-black'>
            <Container>
                <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-16 py-12 sm:py-16 lg:py-20 text-white'>
                    <div className='col-span-1 sm:col-span-2 lg:col-span-3'>
                        <h3 className='font-bold text-xl mb-4'>CS — Ticket System</h3>
                        <p className='text-sm sm:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className='col-span-1 lg:col-span-2'>
                        <h3 className='font-bold text-xl mb-4'>Company</h3>
                        <ul className='space-y-2 sm:space-y-4'>
                            <li><a href="#" className='text-sm sm:text-base hover:text-gray-300 transition-colors'>About Us</a></li>
                            <li><a href="#" className='text-sm sm:text-base hover:text-gray-300 transition-colors'>Our Mission</a></li>
                            <li><a href="#" className='text-sm sm:text-base hover:text-gray-300 transition-colors'>Contact Sales</a></li>
                        </ul>
                    </div>
                    <div className='col-span-1 lg:col-span-2'>
                        <h3 className='font-bold text-xl mb-4'>Services</h3>
                        <ul className='space-y-2 sm:space-y-4'>
                            <li><a href="#" className='text-sm sm:text-base hover:text-gray-300 transition-colors'>Products & Services</a></li>
                            <li><a href="#" className='text-sm sm:text-base hover:text-gray-300 transition-colors'>Customer Stories</a></li>
                            <li><a href="#" className='text-sm sm:text-base hover:text-gray-300 transition-colors'>Download Apps</a></li>
                        </ul>
                    </div>
                    <div className='col-span-1 lg:col-span-2'>
                        <h3 className='font-bold text-xl mb-4'>Information</h3>
                        <ul className='space-y-2 sm:space-y-4'>
                            <li><a href="#" className='text-sm sm:text-base hover:text-gray-300 transition-colors'>Privacy Policy</a></li>
                            <li><a href="#" className='text-sm sm:text-base hover:text-gray-300 transition-colors'>Terms & Conditions</a></li>
                            <li><a href="#" className='text-sm sm:text-base hover:text-gray-300 transition-colors'>Join Us</a></li>
                        </ul>
                    </div>
                    <div className='col-span-1 sm:col-span-2 lg:col-span-3'>
                        <h3 className='font-bold text-xl mb-4'>Social Links</h3>
                        <ul className='space-y-2 sm:space-y-4'>
                            <li><a href="#" className='flex items-center gap-2 text-sm sm:text-base hover:text-gray-300 transition-colors'><span className='bg-white hover:bg-gray-300 transition duration-300 ease-in-out text-black p-1 rounded-full inline-flex items-center justify-center w-6 h-6'><i className="fa-brands fa-x-twitter text-xs"></i></span> @CS — Ticket System</a></li>
                            <li><a href="#" className='flex items-center gap-2 text-sm sm:text-base hover:text-gray-300 transition-colors'><span className='bg-white hover:bg-gray-300 transition duration-300 ease-in-out text-black p-1 rounded-full inline-flex items-center justify-center w-6 h-6'><i className="fa-brands fa-linkedin-in text-xs"></i></span> @CS — Ticket System</a></li>
                            <li><a href="#" className='flex items-center gap-2 text-sm sm:text-base hover:text-gray-300 transition-colors'><span className='bg-white hover:bg-gray-300 transition duration-300 ease-in-out text-black p-1 rounded-full inline-flex items-center justify-center w-6 h-6'><i className="fa-brands fa-facebook-f text-xs"></i></span> @CS — Ticket System</a></li>
                            <li><a href="mailto:support@cst.com" className='flex items-center gap-2 text-sm sm:text-base hover:text-gray-300 transition-colors'><span className='bg-white hover:bg-gray-300 transition duration-300 ease-in-out text-black p-1 rounded-full inline-flex items-center justify-center w-6 h-6'><i className="fa-solid fa-envelope text-xs"></i></span> support@cst.com</a></li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className="copyright border-t-1 border-[#FAFAFA50] py-8 ">
                        <p className='text-center text-white'>© 2025 <a href="#">CS — Ticket System</a>. All rights reserved.</p>
                    </div>
                </section>
            </Container>
        </footer>
        </> 
    );
};

export default Footer;