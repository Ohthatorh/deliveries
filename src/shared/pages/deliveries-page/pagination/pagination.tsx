"use client";

import { ChevronLeft, ChevronRight } from "@/shared/components/icons";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

interface IPagination {
  count: number;
  perPage: number;
}

export const Pagination: FC<IPagination> = ({ count, perPage }) => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const totalPages = Math.ceil(count / perPage);

  const generatePageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `?${params.toString()}`;
  };

  const renderPageLinks = () => {
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    const pageLinks = [];
    for (let i = startPage; i <= endPage; i++) {
      pageLinks.push(
        <li key={i}>
          <Link
            href={generatePageUrl(i)}
            className={`flex items-center justify-center w-[40px] h-[40px] ${
              currentPage === i ? "rounded-full bg-paginationActive" : ""
            }`}
          >
            {i}
          </Link>
        </li>
      );
    }
    return pageLinks;
  };

  return (
    <div className="flex items-center justify-center">
      <ul className="flex items-center">
        <li>
          <Link
            href={
              currentPage - 1 === 0 ? "/" : generatePageUrl(currentPage - 1)
            }
            className={`flex items-center justify-center w-[40px] h-[40px] ${
              currentPage === 1 ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <ChevronLeft />
          </Link>
        </li>
        {renderPageLinks()}
        <li>
          <Link
            href={
              currentPage + 1 > totalPages
                ? "/"
                : generatePageUrl(currentPage + 1)
            }
            className={`flex items-center justify-center w-[40px] h-[40px] ${
              currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <ChevronRight />
          </Link>
        </li>
      </ul>
    </div>
  );
};
