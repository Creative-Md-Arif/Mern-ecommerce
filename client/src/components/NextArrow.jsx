import React from 'react'

const NextArrow = (props) => {

    const {onClick} = props;
  return (
    <div className='w-10 h-10 text-white rounded-full flex justify-center items-center absolute top-[35%] right-2.5 z-10 bg-black bg-opacity-40 hover:bg-opacity-100 cursor-pointer hoverEffect'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={onClick}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    </div>
  )
}

export default NextArrow