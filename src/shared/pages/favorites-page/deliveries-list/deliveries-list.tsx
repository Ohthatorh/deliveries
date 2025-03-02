import { FC } from "react";
import { DeliveriesItem } from "./deliveries-item/deliveries-item";
import { IDelivery } from "@/shared/types";

interface IDeliveriesList {
  items: IDelivery[];
  onLoadMore: () => void;
  canLoadMore: boolean;
}

export const DeliveriesList: FC<IDeliveriesList> = ({
  items,
  onLoadMore,
  canLoadMore,
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      {items.map((item) => (
        <DeliveriesItem key={item.entity.number} delivery={item} />
      ))}
      {canLoadMore && (
        <button
          className="text-grey hover:text-white transition-colors"
          onClick={onLoadMore}
        >
          Показать еще
        </button>
      )}
    </div>
  );
};
