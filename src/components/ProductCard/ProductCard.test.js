import {
  render,
  screen,
  act,
  getByRole,
  logRoles,
} from "@testing-library/react";
import { useParams, BrowserRouter, MemoryRouter } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

describe("This component must render props", () => {
  beforeEach(() => {
    act(() => {
      render(
        <MemoryRouter>
          <ProductCard
            key={1}
            price={549}
            id={1}
            title={"iPhone 9"}
            image={"https://dummyjson.com/image/i/products/1/1.jpg"}
          />
        </MemoryRouter>
      );
    });
  });

  it("Props.price must be correctly rendered", () => {
    const item = screen.getByText(/549/i);
    logRoles(item);
    expect(item).toHaveTextContent("$549.00");
  });
});
