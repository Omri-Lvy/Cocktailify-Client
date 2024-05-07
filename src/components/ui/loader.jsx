import React from 'react';

const Loader = () => {
    return (
        <div className='flex space-x-4 justify-center items-center mt-10'>
            <span className='sr-only'>Loading...</span>
            <div
                className='h-4 w-4 bg-gradient-to-r from-[#FDAC42] via-[#FF8800] to-[#E57A00] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div
                className='h-4 w-4 bg-gradient-to-r from-[#FDAC42] via-[#FF8800] to-[#E57A00] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div
                className='h-4 w-4 bg-gradient-to-r from-[#FDAC42] via-[#FF8800] to-[#E57A00] rounded-full animate-bounce'></div>
        </div>
    );
};

export default Loader;