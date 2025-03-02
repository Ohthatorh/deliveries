import Link from "next/link";
import { FC } from "react";

interface ITableDeliveryField {
  text: string;
  link?: string;
}

export const TableDeliveryField: FC<ITableDeliveryField> = ({ text, link }) => {
  if (link) {
    return (
      <td className="py-3 px-4 text-center">
        <Link
          className="px-5 py-2 bg-tableBg rounded-xl hover:bg-tableBorder transition-colors block"
          href={link}
        >
          {text}
        </Link>
      </td>
    );
  }
  return <td className="py-3 px-4 text-center">{text}</td>;
};
