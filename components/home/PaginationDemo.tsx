import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationDemoProps = {
  id: string;
  name: string;
  currentPage: number;
  totalPages: number;
};

export const PaginationDemo = ({
  id,
  name,
  currentPage,
  totalPages,
}: PaginationDemoProps) => {
  const pages = Array.from(
    { length: Math.min(5, totalPages) },
    (_, i) => i + 1
  );

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {currentPage > 1 && (
            <PaginationPrevious
              href={`/genre?id=${id}&name=${name}&page=${currentPage - 1}`}
            />
          )}
        </PaginationItem>

        {pages.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              href={`/genre?id=${id}&name=${name}&page=${p}`}
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
              href={`/genre?id=${id}&name=${name}&page=${currentPage + 1}`}
            />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
