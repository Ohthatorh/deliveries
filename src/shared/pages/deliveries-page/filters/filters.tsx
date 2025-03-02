import { FC } from "react";
import { FilterLink } from "./filter-link/filter-link";

export const Filters: FC = () => {
  return (
    <div className="flex gap-4 mb-3 overflow-x-auto">
      <FilterLink title="Все" link="/" />
      <FilterLink title="Создан" link="/?status=CREATED" />
      <FilterLink title="Принят" link="/?status=ACCEPTED" />
      <FilterLink title="В пути" link="/?status=IN_TRANSIT" />
      <FilterLink title="Доставлен" link="/?status=DELIVERED" />
      <FilterLink title="Отменен" link="/?status=CANCELED" />
    </div>
  );
};
