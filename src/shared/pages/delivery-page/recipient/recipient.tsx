import { Recipient as IRecipient, Location } from "@/shared/types";
import Link from "next/link";
import { FC } from "react";

interface IRecipientProp {
  recipient: IRecipient;
  to: Location;
}

export const Recipient: FC<IRecipientProp> = ({ recipient, to }) => {
  return (
    <div className="mb-6">
      <p>Получатель:</p>
      <p>
        {recipient.company} - {recipient.name}
      </p>
      <p>
        {to.city}, {to.region}, {to.address}
      </p>
      <p>
        Паспортные данные{" "}
        {recipient.passport_requirements_satisfied
          ? "предоставлены ✅"
          : "не предоставлены ❌"}
      </p>
      <Link className="text-grey" href={`tel:${recipient.phones[0].number}`}>
        Телефон: +{recipient.phones[0].number}
      </Link>
    </div>
  );
};
