import { Sender as ISender, Location } from "@/shared/types";
import { FC } from "react";

interface ISenderProp {
  sender: ISender;
  from: Location;
}

export const Sender: FC<ISenderProp> = ({ sender, from }) => {
  return (
    <div className="mb-6">
      <p>Отправитель:</p>
      <p>
        {sender.company} - {sender.name}
      </p>
      <p>
        {from.city}, {from.region}, {from.address}
      </p>
    </div>
  );
};
