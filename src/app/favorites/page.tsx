import { FavoritesPage } from "@/shared/pages/favorites-page";
import { Metadata } from "next";
import { metadata as defaultMetadata } from "../layout";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Отслеживаемое - Deliveries.io",
  description: "Отслеживаемое - Deliveries.io",
};

export default async function Page() {
  return <FavoritesPage />;
}
