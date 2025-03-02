import { render, screen } from "@testing-library/react";
import { Table } from "./table";
import { IDelivery } from "@/shared/types";

describe("Table Component", () => {
  const mockDeliveries: IDelivery[] = [
    {
      entity: {
        uuid: "95ae18f6-664d-4b3b-a805-0f98fcddbb6a",
        type: 1,
        is_return: true,
        is_reverse: true,
        cdek_number: "835961377 81",
        number: "62a630b2-1c0c-4d79-be28-c9ed9c841658",
        tariff_code: 124,
        comment: "Заказ #1",
        shipment_point: "LFG6",
        delivery_point: "LFG7",
        items_cost_currency: "RUB",
        recipient_currency: "RUB",
        delivery_recipient_cost: {
          value: 529.9620885533546,
          vat_sum: 43.79228974132796,
        },
        sender: {
          company: 'ООО "Компания 7"',
          name: "Имя 20",
          contragent_type: "LEGAL_ENTITY",
          passport_requirements_satisfied: true,
        },
        recipient: {
          company: 'ООО "Получатель 35"',
          name: "Фамилия 94",
          phones: [
            {
              number: "79297110237",
            },
          ],
          passport_requirements_satisfied: true,
        },
        from_location: {
          city: "Челябинск",
          region: "Челябинская область",
          address: "ул. 15, д. 91",
          postal_code: "884271",
        },
        to_location: {
          city: "Казань",
          region: "Татарстан",
          address: "ул. 40, д. 99",
          postal_code: "175362",
        },
        statuses: [
          {
            code: "DELIVERED",
            name: "Доставлен",
            date_time: "2024-06-21T06:16:33",
          },
        ],
      },
      requests: [],
      related_entities: [],
    },
    {
      entity: {
        uuid: "fbfc8680-43b5-4cec-9acb-610db2eeb0c7",
        type: 1,
        is_return: false,
        is_reverse: false,
        cdek_number: "315020845 55",
        number: "9dd1e502-8fd0-4d12-befd-ddf9048f20bb",
        tariff_code: 100,
        comment: "Заказ #2",
        shipment_point: "LFG3",
        delivery_point: "LFG9",
        items_cost_currency: "RUB",
        recipient_currency: "RUB",
        delivery_recipient_cost: {
          value: 512.7342333894412,
          vat_sum: 58.08655575809185,
        },
        sender: {
          company: 'ООО "Компания 50"',
          name: "Имя 87",
          contragent_type: "LEGAL_ENTITY",
          passport_requirements_satisfied: false,
        },
        recipient: {
          company: 'ООО "Получатель 4"',
          name: "Фамилия 9",
          phones: [
            {
              number: "79802747711",
            },
          ],
          passport_requirements_satisfied: true,
        },
        from_location: {
          city: "Санкт-Петербург",
          region: "Ленинградская область",
          address: "ул. 2, д. 64",
          postal_code: "922910",
        },
        to_location: {
          city: "Краснодар",
          region: "Краснодарский край",
          address: "ул. 9, д. 36",
          postal_code: "671241",
        },
        statuses: [
          {
            code: "CANCELED",
            name: "Отменен",
            date_time: "2025-10-18T00:12:31",
          },
        ],
      },
      requests: [],
      related_entities: [],
    },
  ];

  it("renders the table with headers", () => {
    render(<Table deliveries={mockDeliveries} />);
    expect(screen.getByText("ID доставки")).toBeInTheDocument();
    expect(screen.getByText("Статус")).toBeInTheDocument();
    expect(screen.getByText("Дата создания")).toBeInTheDocument();
    expect(screen.getByText("Адрес отправки")).toBeInTheDocument();
    expect(screen.getByText("Адрес доставки")).toBeInTheDocument();
  });
  it("renders empty state when no deliveries are provided", () => {
    render(<Table deliveries={[]} />);
    expect(screen.getByText("ID доставки")).toBeInTheDocument();
    expect(screen.getByText("Статус")).toBeInTheDocument();
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(1);
  });
});
