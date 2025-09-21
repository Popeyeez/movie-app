import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationPopularProps = {
  currentPage: number;
  totalPages: number;
};

export const PaginationPopular = ({
  currentPage,
  totalPages,
}: PaginationPopularProps) => {
  const pages = Array.from(
    { length: Math.min(7, totalPages) },
    (_, i) => i + 1
  );

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {currentPage > 1 && (
            <PaginationPrevious href={`/popular?page=${currentPage - 1}`} />
          )}
        </PaginationItem>

        {pages.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              href={`/popular?page=${p}`}
              isActive={p === currentPage}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {totalPages > 5 && <PaginationEllipsis />}

        <PaginationItem>
          {currentPage < totalPages && (
            <PaginationNext href={`/popular?page=${currentPage + 1}`} />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
