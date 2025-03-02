import { FC } from "react";
import { Table } from "./table/table";
import { IDelivery } from "@/shared/types";
import { Pagination } from "./pagination/pagination";
import { Filters } from "./filters/filters";

interface IDeliveryPage {
  deliveries: {
    items: IDelivery[];
    per_page: number;
    count: number;
  };
}

export const DeliveriesPage: FC<IDeliveryPage> = ({ deliveries }) => {
  return (
    <section className="container">
      <h1 className="text-3xl font-bold mb-3">Доставки</h1>
      <Filters />
      <Table deliveries={deliveries.items} />
      <Pagination count={deliveries.count} perPage={deliveries.per_page} />
    </section>
  );
};
