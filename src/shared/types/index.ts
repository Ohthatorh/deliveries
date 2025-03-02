export interface IParams {
  params: TParams;
  searchParams: TParams;
}

export type TParams = Promise<{ [N: string]: string }>;

export interface IDelivery {
  entity: Entity;
  requests: Request[];
  related_entities: [];
}

export interface Entity {
  uuid: string;
  type: number;
  is_return: boolean;
  is_reverse: boolean;
  cdek_number: string;
  number: string;
  tariff_code: number;
  comment: string;
  shipment_point: string;
  delivery_point: string;
  items_cost_currency: string;
  recipient_currency: string;
  delivery_recipient_cost: DeliveryRecipientCost;
  sender: Sender;
  seller?: Seller;
  recipient: Recipient;
  from_location: Location;
  to_location: Location;
  services?: Service[];
  packages?: Package[];
  statuses: Status[];
  is_client_return?: boolean;
  delivery_mode?: string;
  delivery_detail?: DeliveryDetail;
  calls?: Record<string, unknown>;
}

export interface DeliveryRecipientCost {
  value: number;
  vat_sum: number;
}

export interface Sender {
  company: string;
  name: string;
  contragent_type: string;
  passport_requirements_satisfied: boolean;
}

export interface Seller {
  name: string;
}

export interface Recipient {
  company: string;
  name: string;
  phones: Array<Phone>;
  passport_requirements_satisfied: boolean;
}

export interface Phone {
  number: string;
}

export interface Location {
  code?: number;
  city_uuid?: string;
  city: string;
  country_code?: string;
  country?: string;
  region: string;
  region_code?: number;
  longitude?: number;
  latitude?: number;
  address: string;
  postal_code: string;
}

export interface Service {
  code: string;
  parameter: string;
  sum: number;
  total_sum: number;
  discount_percent: number;
  discount_sum: number;
  vat_rate: number;
  vat_sum: number;
}

export interface Package {
  number: string;
  barcode: string;
  weight: number;
  length: number;
  width: number;
  weight_volume: number;
  weight_calc: number;
  height: number;
  comment?: string | undefined;
  items: Array<Item>;
  package_id?: string | undefined;
}

export interface Item {
  name: string;
  ware_key: string;
  payment: Payment;
  weight: number;
  weight_gross: number;
  amount: number;
  delivery_amount: number;
  return_item_detail?: Record<string, unknown> | undefined;
  excise: boolean;
  cost: number;
}

export interface Payment {
  value: number;
  vat_sum: number;
}

export interface Status {
  code: string;
  name: string;
  date_time: string;
  city?: string;
}

export interface DeliveryDetail {
  delivery_sum: number;
  total_sum: number;
  payment_info: Array<unknown>;
  delivery_vat_rate: number;
  delivery_vat_sum: number;
  delivery_discount_percent: number;
  delivery_discount_sum: number;
}

export interface Request {
  request_uuid: string;
  type: string;
  date_time: string;
  state?: "INVALID" | "VALID";
  errors?: Array<Error> | undefined;
}

export interface Error {
  code: string;
  message?: "Recipient location is not recognized" | undefined;
}
