import { useState } from "react";

const ProductDescription = ({ description = "No description available" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const DESCRIPTION_LIMIT = 200;

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>
        {isExpanded || description.length <= DESCRIPTION_LIMIT
          ? description
          : `${description.substring(0, DESCRIPTION_LIMIT)}...`}
      </p>
      {description.length > DESCRIPTION_LIMIT && (
        <button onClick={toggleDescription} style={{ color: "blue", border: "none", background: "none", cursor: "pointer" }}>
          {isExpanded ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
};

export default ProductDescription;
