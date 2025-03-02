import { IDelivery } from "@/shared/types";
import { FC } from "react";
import { Breadcrumbs } from "./breadcrumbs/breadcrumbs";
import { Status } from "./status/status";
import { Sender } from "./sender/sender";
import { Recipient } from "./recipient/recipient";
import { Statuses } from "./statuses/statuses";
import { AddToFavorite } from "./add-to-favorite/add-to-favorite";

interface IDeliveryPage {
  delivery: IDelivery;
}

export const DeliveryPage: FC<IDeliveryPage> = ({ delivery }) => {
  const title = `Доставка №${delivery.entity.cdek_number}`;
  return (
    <section className="container">
      <Breadcrumbs text={title} />
      <h1 className="text-3xl font-bold mb-3">
        {title} <AddToFavorite deliveryId={delivery.entity.uuid} />
      </h1>
      <Status
        status={
          delivery.entity.statuses[delivery.entity.statuses.length - 1].name
        }
        date={
          delivery.entity.statuses[delivery.entity.statuses.length - 1]
            .date_time
        }
      />
      <Sender
        sender={delivery.entity.sender}
        from={delivery.entity.from_location}
      />
      <Recipient
        recipient={delivery.entity.recipient}
        to={delivery.entity.to_location}
      />
      <Statuses statuses={delivery.entity.statuses} />
    </section>
  );
};
