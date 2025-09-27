import React from 'react';
import Container from '../container/Container';

const Footer = () => {
    return (
        <>
        <footer className='bg-black'>
            <Container>
                <section className='grid grid-cols-12 gap-16 py-20 text-white space-y-4 justify-center'>
                    <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                        <h3 className='font-bold text-xl mb-4'>CS — Ticket System</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className='col-span-12 md:col-span-3 lg:col-span-2 '>
                        <h3 className='font-bold text-xl mb-4'>Company</h3>
                        <ul className='space-y-4'>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Mission</a></li>
                            <li><a href="#">Contact Saled</a></li>
                        </ul>
                    </div>
                    <div className='col-span-12 md:col-span-3 lg:col-span-2'>
                        <h3 className='font-bold text-xl mb-4'>Services</h3>
                        <ul className='space-y-4'>
                            <li><a href="#">Products & Services</a></li>
                            <li><a href="#">Customer Stories</a></li>
                            <li><a href="#">Download Apps</a></li>
                        </ul>
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-2 '>
                        <h3 className='font-bold text-xl mb-4'>Information</h3>
                        <ul className='space-y-4'>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Join Us</a></li>
                        </ul>
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                        <h3 className='font-bold text-xl mb-4'>Social Links</h3>
                        <ul className='space-y-4'>
                            <li><a href="#"><span className='bg-white hover:bg-gray-300 transition duration-300 ease-in-out text-black p-1 rounded-full'><i className="fa-brands fa-x-twitter"></i></span> @CS — Ticket System</a></li>
                            <li><a href="#"><span className='bg-white hover:bg-gray-300 transition duration-300 ease-in-out text-black p-1 rounded-full'><i className="fa-brands fa-linkedin-in"></i></span> @CS — Ticket System</a></li>
                            <li><a href="#"><span className='bg-white hover:bg-gray-300 transition duration-300 ease-in-out text-black p-1 rounded-full'><i className="fa-brands fa-facebook-f"></i></span> @CS — Ticket System</a></li>
                            <li><a href="mailto:support@cst.com"><span className='bg-white hover:bg-gray-300 transition duration-300 ease-in-out text-black p-1 rounded-full'><i className="fa-solid fa-envelope"></i></span> support@cst.com</a></li>
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