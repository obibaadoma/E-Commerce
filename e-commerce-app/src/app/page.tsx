import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <div className="bg bg-slate-50">
      <section>
        <MaxWidthWrapper className='pb-24 pt-10 1g:grid lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <div className='absolute w-28 left-0 -top-20 hidden lg:block '>
                  <img src="/snake-1.png" className = 'w-full'/>
              </div>
              <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl '>Your Image on a <span className='bg-green-600 px-2 text-white'>Custom</span>Phone Case
              </h1>
              <p className='mt-8 text-lg:pr-10 max-w-prose text-center lg:text left text-balance md:text-wrap'>
                  Capture your favorite memorrise with your own, <span className='font-semibold'>one of one</span>phone cases.
                  what else do you want me to write
              </p>
              <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                <div className='space-y-2 '>
                    <li className='flex gap-1.5 items-center text-left'>
                      <check className='h-5 w-5 shrink-0 text-green-600' />
                      High-quality, durable material
                    </li>
                    <li className='flex gap-1.5 items-center text-left'>
                      <check className='h-5 w-5 shrink-0 text-green-600' />
                      5 year print guarntee
                    </li>
                    <li className='flex gap-1.5 items-center text-left'>
                      <check className='h-5 w-5 shrink-0 text-green-600' />
                      Modern iphone models supported
                    </li>
                </div>
              </ul>
              <div className='mt-12  flex flex-col sm:flex-row items-center sm:tems-start gap-5 '> 
              <div className='flex -space-x-4'>
                <img className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' src='/users/user-1.png' alt='use image'/>

                <img className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' src='/users/user-2.png' alt='use image'/>

                <img className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' src='/users/user-3.png' alt='use image'/>

                <img className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' src='/users/user-4.jpg' alt='use image'/>

                <img className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' src='/users/user-5.jpg' alt='use image'/>
              </div>
              <div className='flxe flex-col justify-between items-center sm:items-start'>
                <div className='flex gap-0.5 '>
                  <star className='h-4 w-4 text-green-600 fill-green-600'/>
                  <star className='h-4 w-4 text-green-600 fill-green-600'/>
                  <star className='h-4 w-4 text-green-600 fill-green-600'/>
                  <star className='h-4 w-4 text-green-600 fill-green-600'/>
                  <star className='h-4 w-4 text-green-600 fill-green-600'/>
                </div>
                  <p><span className='font-semibold'>1.250</span>Happy customers</p>
              </div>
               </div>
            </div>
          </div>


          <div className='col-span-full lg:col-span w-full flex justify-cneter px-8 sm:px-16 mt-32 lg:nx-0 lg:mt-20 h-fit'>
            <div className='relatvie md:max-w-xl'>
              <img src="/your-image.png" className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block" />
              <img src="/line.png" className='absolute w-20 -left-6 -bottom-6 select-none'/>
              <phone/>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
