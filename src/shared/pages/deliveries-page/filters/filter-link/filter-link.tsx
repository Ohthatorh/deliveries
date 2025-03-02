"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

interface IFilterLink {
  title: string;
  link: string;
}

export const FilterLink: FC<IFilterLink> = ({ title, link }) => {
  const searchParams = useSearchParams();
  const active =
    (link === "/" && searchParams.size === 0) ||
    (searchParams.get("status") && link.includes(searchParams.get("status")!));
  const className = `text-white px-4 py-1 bg-${
    active ? "paginationActive" : "tableBg"
  } rounded-xl whitespace-nowrap hover:bg-tableBorder transition-colors`;
  return (
    <Link className={className} href={link}>
      {title}
    </Link>
  );
};
