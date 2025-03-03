import { IDelivery } from "@/shared/types";
import { FC } from "react";
import { TableHeaderItem } from "./table-header-item/table-header-item";
import { TableDeliveryItem } from "./table-delivery-item/table-delivery-item";

interface ITable {
  deliveries: IDelivery[];
}

export const Table: FC<ITable> = ({ deliveries }) => {
  return (
    <div className="rounded-xl bg-tableBg border border-tableBorder mb-6 overflow-x-auto">
      <table className="md:w-full table-fixed border-collapse min-w-max">
        <thead>
          <tr>
            <TableHeaderItem name="ID доставки" />
            <TableHeaderItem name="Статус" />
            <TableHeaderItem name="Дата создания" />
            <TableHeaderItem name="Адрес отправки" />
            <TableHeaderItem name="Адрес доставки" />
            <TableHeaderItem />
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <TableDeliveryItem key={delivery.entity.uuid} delivery={delivery} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
