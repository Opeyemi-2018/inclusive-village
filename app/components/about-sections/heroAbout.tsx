"use client"
import Image from 'next/image';
import { motion } from "framer-motion";
import DepartmentSection from './department';

const HeroAbout = () => {
    return (
        <div className='md:pt-40 pt-28 min-h-screen'>
            {/* First section */}
            <div className='px-3 max-w-6xl py-10 mx-auto'>
                <div className='flex items-center md:flex-row flex-col justify-between md:gap-6 gap-4'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }} className='md:space-y-7 space-y-5'>
                        <h1 className='md:text-2xl text-1xl font-semibold'>Welcome to Inclusive Village!</h1>
                        <h2 className='md:text-5xl text-2xl font-bold'>Driving financial innovation for modern businesses</h2>
                        <p className='text-1xl'>
                            Inclusive empowers businesses with cutting-edge fintech solutions, from seamless payment gateways to financial automation tools, helping them scale efficiently in today&apos;s fast-paced digital economy.
                        </p>
                    </motion.div>

                    <div>
                        <Image src="/images/fintech-1.webp" alt="about hero" width={700} height={700} />
                    </div>
                </div>
            </div>

            {/* department section */}
            <DepartmentSection/>

           
            {/* Third section */}
            <div className='bg-[#EAEFEF] text-black'>
                <div className='px-3 max-w-6xl mx-auto flex items-center gap-10 justify-between md:pt-32 pt-28 pb-10 md:flex-row flex-col'>
                    <div className=' flex-1 md:inline hidden'>
                        <h1 className='md:text-4xl font-bold text-2xl pb-4'>One platform. Infinite possibilities.</h1>
                        <Image src={'/images/inclusive-logo.jpg'} alt="inclusive-logo" className='rounded-full' width={300} height={300} />
                    </div>
                    <div className='md:space-y-7 space-y-5 flex-1 '>
                        <p>
                            Whether you need a simple brochure, a Software Application or a complex cross-platform, we have the skills and expertise to deliver a Software Application that exceeds your expectations.
                        </p>
                        <p className='text-1xl'>
                            At Inclusive Village, we understand that every business is unique, which is why we take the time to get to know your business and your target audience. This allows us to create a customized Software Application that not only looks great but also meets the specific needs of your business.
                        </p>
                        <p className='text-1xl'>
                            We have years of experience in Software Application development, and we use the latest technologies to ensure that your Software Application is fast, secure, and reliable.                        </p>
                        <p className='text-1xl'>
                            Inclusive unifies your financial operations from payment collections and invoicing to financial reporting into one intelligent platform built for the future of fintech.
                        </p>
                    </div>
                </div>
            </div>

            {/* fouth section start  */}
            <div className='py-10 max-w-6xl px-3 mx-auto'>
                <h1 className='md:text-4xl text-2xl font-semibold py-10'>Inclusive leadership</h1>
                <div className=' flex  md:flex-row flex-col justify-between gap-10'>
                    <div >
                        <Image src="/images/bio.webp" alt="" width={400} height={400} />
                        <div className='pt-4 space-y-1'>
                            <h1 className='font-semibold'>MR SAM</h1>
                            <p>GM, Payments & Partnerships</p>
                            <a className='text-sm font-semibold underline' href="#">LinkedIn</a>
                        </div>
                    </div>
                    <div >
                        <Image src="/images/bio.webp" alt="" width={400} height={400} />
                        <div className='pt-4 space-y-1'>
                            <h1 className='font-semibold'>MR SAM</h1>
                            <p>GM, Payments & Partnerships</p>
                            <a className='text-sm font-semibold underline' href="#">LinkedIn</a>
                        </div>
                    </div>
                    <div >
                        <Image src="/images/bio.webp" alt="" width={400} height={400} />
                        <div className='pt-4 space-y-1'>
                            <h1 className='font-semibold'>MR SAM</h1>
                            <p>GM, Payments & Partnerships</p>
                            <a className='text-sm font-semibold underline' href="#">LinkedIn</a>
                        </div>
                    </div>
                </div>
                {/* fouth section end  */}
            </div>
        </div>
    );
};

export default HeroAbout;
