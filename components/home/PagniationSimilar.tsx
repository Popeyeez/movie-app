import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationSimilarProps = {
  id: string;
  name: string;
  currentPage: number;
  totalPages: number;
};

export const PaginationSimilar = ({
  id,
  currentPage,
  totalPages,
}: PaginationSimilarProps) => {
  const pages = Array.from(
    { length: Math.min(7, totalPages) },
    (_, i) => i + 1
  );

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {currentPage > 1 && (
            <PaginationPrevious
              href={`/detail/${id}/similar?page=${currentPage - 1}`}
            />
          )}
        </PaginationItem>

        {pages.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              href={`/detail/${id}/similar?page=${p}`}
              isActive={p === currentPage}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {totalPages > 5 && <PaginationEllipsis />}

        <PaginationItem>
          {currentPage < totalPages && (
            <PaginationNext
              href={`/detail/${id}/similar?page=${currentPage + 1}`}
            />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
