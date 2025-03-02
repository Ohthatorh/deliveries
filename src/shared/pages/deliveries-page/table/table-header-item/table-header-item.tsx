import { FC } from "react";

interface ITableHeaderItem {
  name?: string;
}

export const TableHeaderItem: FC<ITableHeaderItem> = ({ name }) => {
  return (
    <th className="py-3 px-4 border-b border-tableBorder">{name || ""}</th>
  );
};
