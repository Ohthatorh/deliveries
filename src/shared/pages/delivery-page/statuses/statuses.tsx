import { Status as IStatus } from "@/shared/types";
import { FC } from "react";
import { Status } from "./status/status";

interface IStatuses {
  statuses: IStatus[];
}

export const Statuses: FC<IStatuses> = ({ statuses }) => {
  return (
    <div>
      <p>Статусы доставки:</p>
      <ul>
        {statuses.map((status) => (
          <Status key={status.code} status={status} />
        ))}
      </ul>
    </div>
  );
};
