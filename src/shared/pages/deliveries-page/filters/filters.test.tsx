import { render, screen } from "@testing-library/react";
import { Filters } from "./filters";

jest.mock("./filter-link/filter-link", () => ({
  FilterLink: ({ title, link }: { title: string; link: string }) => (
    <a href={link}>{title}</a>
  ),
}));

describe("Filters Component", () => {
  it("renders all filter links", () => {
    render(<Filters />);
    expect(screen.getByText("Все")).toBeInTheDocument();
    expect(screen.getByText("Создан")).toBeInTheDocument();
    expect(screen.getByText("Принят")).toBeInTheDocument();
    expect(screen.getByText("В пути")).toBeInTheDocument();
    expect(screen.getByText("Доставлен")).toBeInTheDocument();
    expect(screen.getByText("Отменен")).toBeInTheDocument();
  });

  it("renders filter links with correct href attributes", () => {
    render(<Filters />);

    expect(screen.getByText("Все").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Создан").closest("a")).toHaveAttribute(
      "href",
      "/?status=CREATED"
    );
    expect(screen.getByText("Принят").closest("a")).toHaveAttribute(
      "href",
      "/?status=ACCEPTED"
    );
    expect(screen.getByText("В пути").closest("a")).toHaveAttribute(
      "href",
      "/?status=IN_TRANSIT"
    );
    expect(screen.getByText("Доставлен").closest("a")).toHaveAttribute(
      "href",
      "/?status=DELIVERED"
    );
    expect(screen.getByText("Отменен").closest("a")).toHaveAttribute(
      "href",
      "/?status=CANCELED"
    );
  });

  it("renders the correct number of filter links", () => {
    render(<Filters />);

    const links = screen.getAllByRole("link");
    expect(links.length).toBe(6);
  });
});
