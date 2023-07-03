import { useMemo } from "react";

const range = (start: number, end: number) => {
  let length = end - start + 1;
  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start);
};

export const DOTS = ".."
export const usePagination = ({
  total,
  size,
  sibling = 1,
  page,
}: {
  total: number;
  size: number;
  sibling?: number;
  page: number;
}) => {
  const pageRange = useMemo(() => {
    const count = Math.ceil(total / size);
    //  count = sibling + first + last + current + 2 * DOTS
    const pageNumbers = sibling + 5
    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
      if (pageNumbers >= count) {
        return range(1, count);
      }

    /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const left = Math.max(page - sibling, 1);
    const right = Math.min(page + sibling, count);

     /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */

    const showLeftDots = left > 2;
    const showRightDots = right < count - 2;
    const firstPageIndex = 1;
    const lastPageIndex = count;

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!showLeftDots && showRightDots) {
      let leftItemCount = 3 + 2 * sibling;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, count];
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
      if (showLeftDots && !showRightDots) {
      
        let rightItemCount = 3 + 2 * sibling;
        let rightRange = range(
          count - rightItemCount + 1,
          count
        );
        return [firstPageIndex, DOTS, ...rightRange];
      }
     
    /*
    	Case 4: Both left and right dots to be shown
    */
    if (showLeftDots && showRightDots) {
      let middleRange = range(left, right);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

  }, [total, size, sibling, page]);

  return pageRange || [];
};
