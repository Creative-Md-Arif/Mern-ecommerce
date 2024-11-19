import React, { useState } from 'react';

const TextWithShowMore = ({ text , className }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split the text into words
  const words = text.split(' ');
  const previewText = words.slice(0, 3).join(' ');

  // Toggle between expanded and collapsed text
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="text-gray-800  ">
    <span className='text-[16px] font-bold text-primary'>
    {isExpanded ? text : previewText + (words.length > 3 ? '...' : '')}
    </span>
      {words.length > 3 && (
        <button
          onClick={toggleExpand}
          className=" text-blue-500 hover:underline focus:outline-none text-xs ease-in-out"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default TextWithShowMore;
