import { render, screen } from "@testing-library/react";
import Products from "../pages/products";

test("renders product list", () => {
  render(<Products products={[]} />);
  expect(screen.getByTestId("product-list")).toBeInTheDocument();
});
