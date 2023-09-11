import { FC } from "react";
import { ArrowLeft, ArrowRight } from "$/assets/svg/arrows";
import { IPaginationProps } from "./Pagination.types";
import { NUMBER_OF_ITEMS_PER_PAGE } from "$/constants";

const Pagination: FC<IPaginationProps> = ({ page, setPage, total }) => {
  const totalPages = Math.ceil(total / NUMBER_OF_ITEMS_PER_PAGE);

  const getPageNumbers = () => {
    const pages: number[] = [];
    let start = Math.max(1, page - Math.floor(3 / 2));
    const end = Math.min(totalPages, start + 3 - 1);
    start = Math.max(1, end - 3 + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handlePageChange = (page: number) => setPage(page);

  const renderPagination = (currentPage: number) => {
    const pageNumbers = getPageNumbers();
    const pages = [];

    if (pageNumbers[0] !== 1) {
      pages.push(
        <button
          className={`inline-flex items-center justify-center text-sm leading-5 font-medium font-workSans w-8 h-8 md:w-10 md:h-10 rounded-full text-gray-800 ${
            currentPage === 1 ? "bg-gray-50" : ""
          }`}
          key={1}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      );
      if (pageNumbers[0] !== 2) {
        pages.push(
          <span
            className={`cursor-pointer inline-flex items-center justify-center text-sm leading-5 font-medium font-workSans w-8 h-8 md:w-10 md:h-10 rounded-full text-gray-800`}
            key="ellipsis-start"
            onClick={() => handlePageChange(pageNumbers[0] - 1)}
          >
            ...
          </span>
        );
      }
    }

    pages.push(
      ...pageNumbers.map((page) => (
        <button
          key={page}
          className={`inline-flex items-center justify-center text-sm leading-5 font-medium font-workSans w-8 h-8 md:w-10 md:h-10 rounded-full text-gray-800 ${
            currentPage === page ? "bg-gray-50" : ""
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))
    );

    if (pageNumbers[pageNumbers.length - 1] !== totalPages) {
      if (pageNumbers[pageNumbers.length - 1] !== totalPages - 1) {
        pages.push(
          <span
            key="ellipsis-end"
            className={`cursor-pointer inline-flex items-center justify-center text-sm leading-5 font-medium font-workSans w-8 h-8 md:w-10 md:h-10 rounded-full text-gray-800`}
            onClick={() =>
              handlePageChange(pageNumbers[pageNumbers.length - 1] + 1)
            }
          >
            ...
          </span>
        );
      }
      pages.push(
        <button
          className={`inline-flex items-center justify-center text-sm leading-5 font-medium font-workSans w-8 h-8 md:w-10 md:h-10 rounded-full text-gray-800`}
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return (
      <div className="flex items-center justify-between gap-2 flex-wrap w-full">
        <button
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          className="text-sm font-semibold font-workSans leading-5 flex items-center gap-2"
        >
          <ArrowLeft />
          <span>Previous</span>
        </button>
        <div className="flex items-center">{pages}</div>
        <button
          onClick={() =>
            currentPage < totalPages && handlePageChange(currentPage + 1)
          }
          className="text-sm font-semibold font-workSans leading-5 flex items-center gap-2"
        >
          <span>Next</span>
          <ArrowRight />
        </button>
      </div>
    );
  };

  return renderPagination(page);
};

export default Pagination;
