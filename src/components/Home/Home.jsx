import React from 'react'

const Home = () => {
    return (
        <>
            <div className='min-h-1.5 p-10 overflow-hidden bg-fixed bg-center bg-cover bg-no-repeat flex flex-col md:flex-col md:flex lg:flex lg:flex-row gap-5 justify-around items-center ' style={{ backgroundImage: `url('/stars.jpg')` }}>
                <div className='w-full'>
                    <h1 className='text-white font-bold text-xl md:text-3xl lg:text-5xl'>Welcome to Space Dive: Your Gateway to the Cosmos</h1>
                    <p className='text-white font-semibold text-xs md:text-sm lg:text-lg'>
                        Welcome to Space Dive, where the dream of space travel becomes a reality. As pioneers in the new frontier of space tourism, we offer unparalleled experiences that transport you beyond the bounds of Earth and into the awe-inspiring expanse of the universe.
                    </p>
                    <div className='w-full flex items-center'>
                        <input
                            type="text"
                            className='w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder='Search...'
                        />
                        <button
                            className='p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            🔍
                        </button>
                    </div>
                </div>
                <div className='w-full'>
                    <img src='/ship_hero.png' />
                </div>
            </div>
            <div className="relative h-screen overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover"
                    style={{ backgroundImage: `url('/logo_space.png')` }}
                >
                </div>
                <div className="relative flex items-center justify-center h-full">
                    <div className="text-white p-8 bg-black bg-opacity-50 rounded-md">
                        <h1 className="text-4xl font-bold">Hello, World!</h1>
                        <p className="mt-4">This is a parallax background example.</p>
                    </div>
                </div>
            </div>
            {/* <div className="min-h-screen">
            <div 
                className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover" 
                style={{ backgroundImage: `url('/Screenshot.png')` }}
    
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                <div className="text-white p-8 bg-black bg-opacity-50 rounded-md  md:w-56 lg:w-96">
                    <h1 className="text-4xl font-bold">Hello, World! Again</h1>
                    <p className="">This is the second a parallax background example.</p>
                </div>
                <div className="text-white p-8 bg-black bg-opacity-50 rounded-md  md:w-56 lg:w-96">
                    <h1 className="text-4xl font-bold">Hello, World! Again</h1>
                    <p className="">This is the second a parallax background example.</p>
                </div>
                <div className="text-white p-8 bg-black bg-opacity-50 rounded-md  md:w-56 lg:w-96">
                    <h1 className="text-4xl font-bold">Hello, World! Again</h1>
                    <p className="">This is the second a parallax background example.</p>
                </div>
                <div className="text-white p-8 bg-black bg-opacity-50 rounded-md  md:w-56 lg:w-96">
                    <h1 className="text-4xl font-bold">Hello, World! Again</h1>
                    <p className="">This is the second a parallax background example.</p>
                </div>
                <div className="text-white p-8 bg-black bg-opacity-50 rounded-md  md:w-56 lg:w-96">
                    <h1 className="text-4xl font-bold">Hello, World! Again</h1>
                    <p className="">This is the second a parallax background example.</p>
                </div>
                <div className="text-white p-8 bg-black bg-opacity-50 rounded-md  md:w-56 lg:w-96">
                    <h1 className="text-4xl font-bold">Hello, World! Again</h1>
                    <p className="">This is the second a parallax background example.</p>
                </div>
                
            </div>
        </div> */}
            <div className="relative h-screen overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover"
                    style={{ backgroundImage: `url('/logo_space.png')` }}
                >
                </div>
                <div className="relative flex items-center justify-center h-full">
                    <div className="text-white p-8 bg-black bg-opacity-50 rounded-md">
                        <h1 className="text-4xl font-bold">Hello, World!</h1>
                        <p className="mt-4">This is the third a parallax background example.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home