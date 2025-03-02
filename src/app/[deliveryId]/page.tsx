import { DeliveryPage } from "@/shared/pages/delivery-page";
import { getDeliveryRequest } from "@/shared/utils/api/getDeliveryRequest";
import { notFound } from "next/navigation";
import { metadata } from "../layout";
import { IParams } from "@/shared/types";

export const revalidate = 10;

export async function generateMetadata({ params }: IParams) {
  const { deliveryId } = await params;
  const delivery = await getDeliveryRequest(deliveryId);
  return {
    ...metadata,
    title: `Доставка №${delivery.delivery.entity.cdek_number} - Deliveries.io`,
    description: `Доставка №${delivery.delivery.entity.cdek_number} - Deliveries.io`,
  };
}

export default async function Page({ params }: IParams) {
  const { deliveryId } = await params;
  const delivery = await getDeliveryRequest(deliveryId);
  if (delivery.error_message === "Delivery not found") {
    return notFound();
  }
  return <DeliveryPage delivery={delivery.delivery} />;
}
