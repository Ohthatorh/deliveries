import { IDelivery } from "@/shared/types";
import { FC } from "react";
import { TableDeliveryField } from "./table-delivery-field/table-delivery-field";

interface ITableDeliveryItem {
  delivery: IDelivery;
}

export const TableDeliveryItem: FC<ITableDeliveryItem> = ({ delivery }) => {
  return (
    <tr
      key={delivery.entity.uuid}
      className="bg-background [&:not(:last-child)]:border-b border-tableBorder"
    >
      <TableDeliveryField text={delivery.entity.cdek_number} />
      <TableDeliveryField
        text={
          delivery.entity.statuses[delivery.entity.statuses.length - 1].name
        }
      />
      <TableDeliveryField
        text={new Date(delivery.entity.statuses[0].date_time).toLocaleString()}
      />
      <TableDeliveryField
        text={
          delivery.entity.from_location.city +
          ", " +
          delivery.entity.from_location.address
        }
      />
      <TableDeliveryField
        text={
          delivery.entity.to_location.city +
          ", " +
          delivery.entity.to_location.address
        }
      />
      <TableDeliveryField text={"->"} link={`/${delivery.entity.uuid}/`} />
    </tr>
  );
};
