import { ChevronsLeft } from 'lucide-react';
import { DOTS, usePagination } from './useNumberPagination.ts';
import { ChevronsRight } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

const NumberPagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  totalPages,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const onLastPage = () => {
    onPageChange(totalPages);
  };

  const onFirstPage = () => {
    onPageChange(1);
  };

  let lastPage = paginationRange[paginationRange?.length - 1];

  return (
    <div className="flex flex-wrap gap-3 mt-4">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={onPrevious}
        className="w-8 h-8 rounded-[8px] border border-[#F1F1F1] p-1"
      >
        <ChevronsLeft />
      </button>
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={onFirstPage}
        className="w-8 h-8 rounded-[8px] border border-[#F1F1F1] p-1 cursor-pointer"
      >
        <ChevronLeft />
      </button>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <p>&#8230;</p>;
        }

        return (
          <p
            className="w-8 h-8 rounded-[8px] border border-[#F1F1F1] p-1 text-center cursor-pointer"
            style={{
              cursor: 'pointer',
              background: pageNumber === currentPage ? '#2F80ED' : 'white',
              color: pageNumber === currentPage ? '#ffffff' : '#000000',
            }}
            // borderRadius={'50%'}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </p>
        );
      })}
      <button
        className="w-8 h-8 rounded-[8px] border border-[#F1F1F1] p-1 cursor-pointer"
        type="button"
        disabled={currentPage === lastPage}
        onClick={onLastPage}
      >
        <ChevronRight />
      </button>
      <button
        className="w-8 h-8 rounded-[8px] border border-[#F1F1F1] p-1 cursor-pointer"
        type="button"
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        <ChevronsRight />
      </button>
    </div>
  );
};

export default NumberPagination;
