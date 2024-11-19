import { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";

function Items({ currentItems }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {currentItems &&
        currentItems.map((item) => (
          <div key={item._id}>
            <Product item={item} />
          </div>
        ))}
    </div>
  );
}

const Pagination = ({ itemPerPage, products }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemPerPage;
  const currentItems = products.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(products.length / itemPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className="w-full h-full overflow-hidden">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex items-center justify-between ">
        <ReactPaginate
        nextAriaLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel=""
        pageLinkClassName="w-9 h-9 border-[1px] border-gray-300 flex justify-center items-center text-sm font-semibold text-primary hover:bg-primary hover:text-white duration-300"
        pageClassName="mr-3"
        containerClassName="flex items-center justify-center font-semibold gap-3"
        activeLinkClassName="bg-primary text-white"
        />
      <p>
        Products from {itemOffset + 1} to {endOffset} of {products.length} items
      </p>
      </div>
    </div>
  );
};

export default Pagination;
