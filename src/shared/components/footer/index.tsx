import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="container">
      <div className="py-10 flex items-center justify-center flex-col gap-5">
        <ul className="w-full flex gap-10 justify-between">
          <li>
            <Link className="text-grey" href="#">
              ссылка
            </Link>
          </li>
          <li>
            <Link className="text-grey" href="#">
              ссылка
            </Link>
          </li>
          <li>
            <Link className="text-grey" href="#">
              ссылка
            </Link>
          </li>
        </ul>
        <p className="text-grey">@2025 Deliveries.io</p>
      </div>
    </footer>
  );
};

export default Footer;
