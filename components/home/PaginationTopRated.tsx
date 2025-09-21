import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationTopRatedProps = {
  currentPage: number;
  totalPages: number;
};

export const PaginationTopRated = ({
  currentPage,
  totalPages,
}: PaginationTopRatedProps) => {
  const pages = Array.from(
    { length: Math.min(7, totalPages) },
    (_, i) => i + 1
  );

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {currentPage > 1 && (
            <PaginationPrevious href={`/top_rated?page=${currentPage - 1}`} />
          )}
        </PaginationItem>

        {pages.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              href={`/top_rated?page=${p}`}
              isActive={p === currentPage}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {totalPages > 5 && <PaginationEllipsis />}

        <PaginationItem>
          {currentPage < totalPages && (
            <PaginationNext href={`/top_rated?page=${currentPage + 1}`} />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
