import { render, screen } from "@testing-library/react";
import { DeliveriesPage } from ".";
import { IDelivery } from "@/shared/types";

jest.mock("./filters/filters", () => ({
  Filters: () => <div role="filters">Filters Mock</div>,
}));

jest.mock("./table/table", () => ({
  Table: () => <div role="table">Table Mock</div>,
}));

jest.mock("./pagination/pagination", () => ({
  Pagination: () => <div role="pagination">Pagination Mock</div>,
}));

const mockDeliveries: {
  count: number;
  per_page: number;
  items: IDelivery[];
} = {
  items: [
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
    {
      entity: {
        uuid: "e182a94b-8bb3-4e8a-a21d-26f6b5182126",
        type: 1,
        is_return: true,
        is_reverse: false,
        cdek_number: "764036996 90",
        number: "a9c1e722-7925-4c26-9ea4-7ae92893ed3a",
        tariff_code: 123,
        comment: "Заказ #3",
        shipment_point: "LFG2",
        delivery_point: "LFG5",
        items_cost_currency: "RUB",
        recipient_currency: "RUB",
        delivery_recipient_cost: {
          value: 738.8873542215163,
          vat_sum: 97.97657953116253,
        },
        sender: {
          company: 'ООО "Компания 39"',
          name: "Имя 52",
          contragent_type: "LEGAL_ENTITY",
          passport_requirements_satisfied: false,
        },
        recipient: {
          company: 'ООО "Получатель 46"',
          name: "Фамилия 58",
          phones: [
            {
              number: "79125711036",
            },
          ],
          passport_requirements_satisfied: false,
        },
        from_location: {
          city: "Уфа",
          region: "Башкортостан",
          address: "ул. 45, д. 38",
          postal_code: "335089",
        },
        to_location: {
          city: "Санкт-Петербург",
          region: "Ленинградская область",
          address: "ул. 39, д. 23",
          postal_code: "670741",
        },
        statuses: [
          {
            code: "DELIVERED",
            name: "Доставлен",
            date_time: "2024-03-15T08:24:10",
          },
        ],
      },
      requests: [],
      related_entities: [],
    },
    {
      entity: {
        uuid: "6404e32e-6f59-4bb8-909e-a1a54320880e",
        type: 1,
        is_return: false,
        is_reverse: true,
        cdek_number: "358971688 40",
        number: "26118656-ffb1-4225-bf70-11126de949c7",
        tariff_code: 184,
        comment: "Заказ #4",
        shipment_point: "LFG3",
        delivery_point: "LFG10",
        items_cost_currency: "RUB",
        recipient_currency: "RUB",
        delivery_recipient_cost: {
          value: 562.7469167410053,
          vat_sum: 46.445356349020585,
        },
        sender: {
          company: 'ООО "Компания 6"',
          name: "Имя 8",
          contragent_type: "LEGAL_ENTITY",
          passport_requirements_satisfied: true,
        },
        recipient: {
          company: 'ООО "Получатель 6"',
          name: "Фамилия 4",
          phones: [
            {
              number: "79027810597",
            },
          ],
          passport_requirements_satisfied: true,
        },
        from_location: {
          city: "Краснодар",
          region: "Краснодарский край",
          address: "ул. 36, д. 96",
          postal_code: "177926",
        },
        to_location: {
          city: "Москва",
          region: "Московская область",
          address: "ул. 15, д. 65",
          postal_code: "883009",
        },
        statuses: [
          {
            code: "ACCEPTED",
            name: "Принят",
            date_time: "2025-07-07T19:12:59",
          },
        ],
      },
      requests: [],
      related_entities: [],
    },
    {
      entity: {
        uuid: "b0a5a023-2fc2-42ae-91df-cb66bb43428b",
        type: 1,
        is_return: true,
        is_reverse: false,
        cdek_number: "938687792 33",
        number: "22b286ae-e877-4b65-998d-e6ecb29f497c",
        tariff_code: 164,
        comment: "Заказ #5",
        shipment_point: "LFG4",
        delivery_point: "LFG8",
        items_cost_currency: "RUB",
        recipient_currency: "RUB",
        delivery_recipient_cost: {
          value: 226.3125527421176,
          vat_sum: 22.113697313426574,
        },
        sender: {
          company: 'ООО "Компания 20"',
          name: "Имя 11",
          contragent_type: "LEGAL_ENTITY",
          passport_requirements_satisfied: false,
        },
        recipient: {
          company: 'ООО "Получатель 46"',
          name: "Фамилия 17",
          phones: [
            {
              number: "79656930343",
            },
          ],
          passport_requirements_satisfied: false,
        },
        from_location: {
          city: "Воронеж",
          region: "Воронежская область",
          address: "ул. 10, д. 58",
          postal_code: "944510",
        },
        to_location: {
          city: "Новосибирск",
          region: "Новосибирская область",
          address: "ул. 39, д. 66",
          postal_code: "484910",
        },
        statuses: [
          {
            code: "DELIVERED",
            name: "Доставлен",
            date_time: "2024-09-22T04:32:17",
          },
        ],
      },
      requests: [],
      related_entities: [],
    },
    {
      entity: {
        uuid: "5881f2e3-1c00-4d8f-a2a6-738459087e53",
        type: 1,
        is_return: false,
        is_reverse: true,
        cdek_number: "327692297 81",
        number: "87a1dd1d-eb86-4062-b988-eef0c8cbdf98",
        tariff_code: 144,
        comment: "Заказ #6",
        shipment_point: "LFG2",
        delivery_point: "LFG8",
        items_cost_currency: "RUB",
        recipient_currency: "RUB",
        delivery_recipient_cost: {
          value: 288.275172630865,
          vat_sum: 68.58297601737569,
        },
        sender: {
          company: 'ООО "Компания 23"',
          name: "Имя 33",
          contragent_type: "LEGAL_ENTITY",
          passport_requirements_satisfied: true,
        },
        recipient: {
          company: 'ООО "Получатель 14"',
          name: "Фамилия 90",
          phones: [
            {
              number: "79901871754",
            },
          ],
          passport_requirements_satisfied: false,
        },
        from_location: {
          city: "Уфа",
          region: "Башкортостан",
          address: "ул. 15, д. 80",
          postal_code: "435252",
        },
        to_location: {
          city: "Челябинск",
          region: "Челябинская область",
          address: "ул. 28, д. 8",
          postal_code: "971793",
        },
        statuses: [
          {
            code: "DELIVERED",
            name: "Доставлен",
            date_time: "2025-03-09T23:19:28",
          },
        ],
      },
      requests: [],
      related_entities: [],
    },
    {
      entity: {
        uuid: "66dde505-80de-4377-94bd-5deec846bd00",
        type: 1,
        is_return: true,
        is_reverse: true,
        cdek_number: "344252433 39",
        number: "93502d1f-0ad3-4377-9a79-7c039b524f8a",
        tariff_code: 123,
        comment: "Заказ #7",
        shipment_point: "LFG4",
        delivery_point: "LFG10",
        items_cost_currency: "RUB",
        recipient_currency: "RUB",
        delivery_recipient_cost: {
          value: 374.3569026229888,
          vat_sum: 80.27660532492422,
        },
        sender: {
          company: 'ООО "Компания 25"',
          name: "Имя 83",
          contragent_type: "LEGAL_ENTITY",
          passport_requirements_satisfied: false,
        },
        recipient: {
          company: 'ООО "Получатель 17"',
          name: "Фамилия 35",
          phones: [
            {
              number: "79512023052",
            },
          ],
          passport_requirements_satisfied: false,
        },
        from_location: {
          city: "Краснодар",
          region: "Краснодарский край",
          address: "ул. 3, д. 90",
          postal_code: "588985",
        },
        to_location: {
          city: "Уфа",
          region: "Башкортостан",
          address: "ул. 18, д. 50",
          postal_code: "765347",
        },
        statuses: [
          {
            code: "CREATED",
            name: "Создан",
            date_time: "2025-10-31T16:47:49",
          },
        ],
      },
      requests: [],
      related_entities: [],
    },
    {
      entity: {
        uuid: "177369db-7915-4e70-a718-55b58b99cfdb",
        type: 1,
        is_return: true,
        is_reverse: false,
        cdek_number: "687832264 13",
        number: "cd9743f4-76dd-4f36-805f-51427622fc89",
        tariff_code: 156,
        comment: "Заказ #8",
        shipment_point: "LFG1",
        delivery_point: "LFG5",
        items_cost_currency: "RUB",
        recipient_currency: "RUB",
        delivery_recipient_cost: {
          value: 394.82154831375914,
          vat_sum: 9.884253944395338,
        },
        sender: {
          company: 'ООО "Компания 27"',
          name: "Имя 19",
          contragent_type: "LEGAL_ENTITY",
          passport_requirements_satisfied: true,
        },
        recipient: {
          company: 'ООО "Получатель 16"',
          name: "Фамилия 95",
          phones: [
            {
              number: "79890853778",
            },
          ],
          passport_requirements_satisfied: true,
        },
        from_location: {
          city: "Самара",
          region: "Самарская область",
          address: "ул. 24, д. 79",
          postal_code: "800175",
        },
        to_location: {
          city: "Самара",
          region: "Самарская область",
          address: "ул. 17, д. 46",
          postal_code: "768133",
        },
        statuses: [
          {
            code: "IN_TRANSIT",
            name: "В пути",
            date_time: "2025-12-30T10:51:33",
          },
        ],
      },
      requests: [],
      related_entities: [],
    },
    {
      entity: {
        uuid: "3b3b07e0-29e0-4a71-8ecf-41c3b9eb381a",
        type: 1,
        is_return: false,
        is_reverse: false,
        cdek_number: "277449895 46",
        number: "e83f663b-7c12-4c8c-8015-43e5b2adcfbf",
        tariff_code: 153,
        comment: "Заказ #9",
        shipment_point: "LFG9",
        delivery_point: "LFG9",
        items_cost_currency: "RUB",
        recipient_currency: "RUB",
        delivery_recipient_cost: {
          value: 906.4284639725892,
          vat_sum: 3.022605543199175,
        },
        sender: {
          company: 'ООО "Компания 24"',
          name: "Имя 22",
          contragent_type: "LEGAL_ENTITY",
          passport_requirements_satisfied: true,
        },
        recipient: {
          company: 'ООО "Получатель 40"',
          name: "Фамилия 70",
          phones: [
            {
              number: "79999076998",
            },
          ],
          passport_requirements_satisfied: true,
        },
        from_location: {
          city: "Казань",
          region: "Татарстан",
          address: "ул. 43, д. 3",
          postal_code: "727098",
        },
        to_location: {
          city: "Новосибирск",
          region: "Новосибирская область",
          address: "ул. 48, д. 89",
          postal_code: "620393",
        },
        statuses: [
          {
            code: "DELIVERED",
            name: "Доставлен",
            date_time: "2024-11-11T02:27:23",
          },
        ],
      },
      requests: [],
      related_entities: [],
    },
    {
      entity: {
        uuid: "0daf4c1b-4c52-48aa-b5ac-157805476e8f",
        type: 1,
        is_return: true,
        is_reverse: true,
        cdek_number: "554821208 63",
        number: "f665929f-2f0b-4e27-9419-9a9f3ecd5d57",
        tariff_code: 106,
        comment: "Заказ #10",
        shipment_point: "LFG7",
        delivery_point: "LFG5",
        items_cost_currency: "RUB",
        recipient_currency: "RUB",
        delivery_recipient_cost: {
          value: 507.9955728371338,
          vat_sum: 5.512300067254383,
        },
        sender: {
          company: 'ООО "Компания 13"',
          name: "Имя 48",
          contragent_type: "LEGAL_ENTITY",
          passport_requirements_satisfied: false,
        },
        recipient: {
          company: 'ООО "Получатель 4"',
          name: "Фамилия 68",
          phones: [
            {
              number: "79307756768",
            },
          ],
          passport_requirements_satisfied: true,
        },
        from_location: {
          city: "Санкт-Петербург",
          region: "Ленинградская область",
          address: "ул. 4, д. 49",
          postal_code: "592881",
        },
        to_location: {
          city: "Уфа",
          region: "Башкортостан",
          address: "ул. 14, д. 77",
          postal_code: "573370",
        },
        statuses: [
          {
            code: "IN_TRANSIT",
            name: "В пути",
            date_time: "2024-10-21T19:37:06",
          },
        ],
      },
      requests: [],
      related_entities: [],
    },
  ],
  per_page: 10,
  count: 500,
};

describe("DeliveriesPage Component", () => {
  it("renders the page title", () => {
    render(<DeliveriesPage deliveries={mockDeliveries} />);
    expect(screen.getByText("Доставки")).toBeInTheDocument();
  });

  it("renders the Filters component", () => {
    render(<DeliveriesPage deliveries={mockDeliveries} />);
    expect(screen.getByRole("filters")).toBeInTheDocument();
  });

  it("renders the Table component with correct data", () => {
    render(<DeliveriesPage deliveries={mockDeliveries} />);
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("renders the Pagination component with correct props", () => {
    render(<DeliveriesPage deliveries={mockDeliveries} />);
    expect(screen.getByRole("pagination")).toBeInTheDocument();
  });
});
