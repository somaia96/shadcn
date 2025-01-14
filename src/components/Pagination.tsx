import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination"

interface IProps {
  size?: number;
  count: number;
  endIndex: number;
  searchParams: URLSearchParams;
  setSearchParams: (val: {}) => void;
  page: number;
  setPage: (val: ((value: number) => number) | number) => void;
  setStartIndex: (val: ((prev: number) => number) | number) => void
}
const PaginationComponent = ({ page, setPage, searchParams, setSearchParams, size = 3, count, endIndex, setStartIndex }: IProps) => {

  const handleChangePage = (item: number) => {
    if (endIndex == (count*size)) return;
    setStartIndex((item - 1) * size);
    setPage(item);
    searchParams.set("page", `${item}`);
    setSearchParams(searchParams);
  }
  const handleNextPage = () => {
    if (page === count) return;
    searchParams.set("page", (page + 1).toString());
    setSearchParams(searchParams);
    setPage(prev => prev + 1);
    setStartIndex((prev: number) => prev + size)
  }
  const handlePrevPage = () => {
    if (page === 1) return;
    searchParams.set("page", (page - 1).toString());
    setSearchParams(searchParams);
    console.log(searchParams.get("page"));
    setPage(prev => prev - 1);
    setStartIndex((prev: number) => prev - size)
  }

  if(count < 2) return;

  return (
    <div className="flex justify-items-center justify-center">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious className="cursor-pointer" onClick={handlePrevPage} />
          </PaginationItem>
          {
            Array.from(Array(count + 1).keys()).slice(count <= 3 ? 1 : (page <= count - 2 ? page : page - 2), page + 3).map((item, i) => {
              return (
                <PaginationItem key={i}>
                  <PaginationLink isActive={page == item} className="cursor-pointer" onClick={() => handleChangePage(item)}>
                    {item}
                  </PaginationLink>
                </PaginationItem>
              )
            })
          }
          <PaginationItem className={page >= count - 3 ? "hidden" : ""}>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink isActive={page == count} className={page > count - 3 ? "hidden" : "cursor-pointer"} onClick={() => { setSearchParams({ page: count }); setPage(count); setStartIndex((count - 1) * size) }}>
              {count}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext className="cursor-pointer" onClick={handleNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default PaginationComponent
