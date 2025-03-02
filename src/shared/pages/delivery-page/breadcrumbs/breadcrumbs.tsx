import Link from "next/link";
import { FC } from "react";

interface IBreadcrumbs {
  text: string;
}

export const Breadcrumbs: FC<IBreadcrumbs> = ({ text }) => {
  return (
    <nav className="mb-10">
      <ul className="flex gap-2">
        <li>
          <Link className="text-grey flex items-center gap-2" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8L2 12L6 16" />
              <path d="M2 12H22" />
            </svg>
            Доставки
          </Link>
        </li>
        <li className="text-grey">
          <p>/</p>
        </li>
        <li>
          <p>{text}</p>
        </li>
      </ul>
    </nav>
  );
};
