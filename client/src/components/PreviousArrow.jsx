import React from 'react'

const PreviousArrow = (props) => {

    const {onClick} = props
  return (
    <div className='w-10 h-10 text-white rounded-full flex justify-center items-center absolute top-[35%] left-0 z-10 bg-black bg-opacity-40 hover:bg-opacity-100 cursor-pointer hoverEffect' onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
    </div>
  )
}

export default PreviousArrow