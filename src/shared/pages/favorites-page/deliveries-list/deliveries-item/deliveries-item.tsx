import { IDelivery } from "@/shared/types";
import Link from "next/link";
import { FC } from "react";

interface IDeliveriesItem {
  delivery: IDelivery;
}

export const DeliveriesItem: FC<IDeliveriesItem> = ({ delivery }) => {
  return (
    <Link
      href={`/${delivery.entity.uuid}/`}
      className="block max-w-sm p-6 bg-tableBg rounded-xl hover:bg-tableBorder transition-colors"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {delivery.entity.comment}
      </h5>
      <p className="font-normal text-grey">{delivery.entity.cdek_number}</p>
      <p className="font-normal text-grey">
        Статус:{" "}
        {delivery.entity.statuses[delivery.entity.statuses.length - 1].name}
      </p>
      <p className="font-normal text-grey">
        Дата: {new Date(delivery.entity.statuses[0].date_time).toLocaleString()}
      </p>
    </Link>
  );
};
