import { DeliveriesPage } from "@/shared/pages/deliveries-page";
import { IParams } from "@/shared/types";
import { getDeliveriesRequest } from "@/shared/utils/api/getDeliveriesRequest";

export default async function Page({ searchParams }: IParams) {
  const { page, status } = await searchParams;
  const deliveries = await getDeliveriesRequest(page, status);
  return <DeliveriesPage deliveries={deliveries} />;
}
