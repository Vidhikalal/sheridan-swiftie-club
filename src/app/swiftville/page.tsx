import React from 'react'
import { Kaushan_Script, Cinzel } from 'next/font/google'
import Backdrop from '@/components/Backdrop' // Import Backdrop component
import SwiftvilleButton from '@/components/SwiftvilleButton'
const kaushan = Kaushan_Script({ subsets: ['latin'], weight: '400' })
const alfa = Cinzel({ subsets: ['latin'], weight: '400' })

const Page: React.FC = () => {
    return (
        <div>


            <Backdrop>
                <div className="relative z-20 max-w-screen-sm mx-auto flex flex-col justify-center items-center ">
                    <h3 className={`text-center text-[#0060FF] ${alfa.className} sm:text-lg text-sm  animate-jitter `}>
                        Sheridan Swiftie Club Presents
                    </h3>

                    <h2 className={`mt-4 text-[#0060FF] ${kaushan.className} sm:text-lg text-base `}>
                        November 01, 2024
                    </h2>

                    <h1 className={`mt-6 z-30 text-center text-[#0060FF] ${kaushan.className} sm:text-8xl text-4xl animate-jitter `}>
                        Welcome <br /> to Swiftville
                    </h1>

                    <h2 className={`absolute z-50 border-x-pink-400 right-2/3 top-52 sm:top-80 mt-4 animate-blink text-[#0060FF] ${kaushan.className} sm:text-xl text-lg `}>
                        Trafalgar Campus
                    </h2>
                    <br />

                </div>
            </Backdrop>
            <div className='flex flex-col justify-center items-center w-full h-[100vh]'>
                <h1 className='text-3xl font-mono text-white' >Coming Soon</h1>
            </div>
        </div>
    )
}

export default Page;
