import { FC } from "react";

interface IStatus {
  status: string;
  date: string;
}

export const Status: FC<IStatus> = ({ status, date }) => {
  const correctedDate = new Date(date);
  const readableDate = correctedDate.toLocaleString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="mb-6">
      <p className="text-grey">
        {status} {readableDate}
      </p>
    </div>
  );
};
