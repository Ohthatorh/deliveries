"use client";

import { FC, useEffect, useState } from "react";
import { Breadcrumbs } from "../delivery-page/breadcrumbs/breadcrumbs";
import { useAppDispatch, useAppSelector } from "@/services/redux/hooks";
import {
  favoritesCount,
  favouritesError,
  favouritesLoading,
  getFavoritesInfo,
} from "@/services/redux/slices/favoritesSlice";
import { Preloader } from "@/shared/components/preloader";
import { IDelivery } from "@/shared/types";
import { ErrorComponent } from "@/shared/components/error";
import { DeliveriesList } from "./deliveries-list/deliveries-list";

export const FavoritesPage: FC = () => {
  const title = "Отслеживаемое";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useAppDispatch<any>();
  const deliveryItemsCount = useAppSelector(favoritesCount);
  const isLoading = useAppSelector(favouritesLoading);
  const hasError = useAppSelector(favouritesError);
  const [items, setItems] = useState<IDelivery[]>([]);
  const [page, setPage] = useState(0);
  const [canLoadMore, setCanLoadMore] = useState(deliveryItemsCount > 10);

  const fetchItems = async () => {
    const currentPage = page + 1;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return await dispatch(getFavoritesInfo(currentPage)).then((res: any) => {
      const deliveryItems = [...items, ...res.payload.deliveries.items];
      setItems(deliveryItems);
      setPage(currentPage);
      setCanLoadMore(deliveryItemsCount > deliveryItems.length);
    });
  };

  useEffect(() => {
    if (deliveryItemsCount > 0) {
      fetchItems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="container">
      <Breadcrumbs text={title} />
      <h1 className="text-3xl font-bold mb-3">{title}</h1>
      {isLoading && <Preloader />}
      {hasError && (
        <ErrorComponent text="Что-то пошло не так.... Ошибка загрузки!" />
      )}
      {items.length > 0 ? (
        <DeliveriesList
          items={items}
          onLoadMore={fetchItems}
          canLoadMore={canLoadMore}
        />
      ) : (
        <div
          className="inline-block p-4 mb-4 text-sm text-white rounded-lg bg-tableBg"
          role="alert"
        >
          <span className="font-medium">Нет отслеживаемых доставок</span>
        </div>
      )}
    </section>
  );
};
