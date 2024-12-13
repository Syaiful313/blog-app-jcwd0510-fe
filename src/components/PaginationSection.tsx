import { paginationMeta } from "@/types/pagination"
import { FC } from "react"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  

interface PaginationSectionProps extends paginationMeta{
    onChangePage: (page: number) => void;
}
const PaginationSection:FC<PaginationSectionProps> = ({
    page,
    take,
    total,
    onChangePage
}) => {

    const handlePrev = () => {
        if(page > 1) {
            onChangePage(page -1)
        }
    }
    const  handleNext = () => {
        if(page < Math.ceil(total / take)) {
            onChangePage(page + 1)
        }
    }

  return (
    <Pagination className="mt-12">
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious onClick={handlePrev} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink >{page}</PaginationLink>
    </PaginationItem>
   
    <PaginationItem>
      <PaginationNext onClick={handleNext} />
    </PaginationItem>
  </PaginationContent>
</Pagination>

  )
}

export default PaginationSection