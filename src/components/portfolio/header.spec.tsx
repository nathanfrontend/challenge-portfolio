import { render, screen } from "@testing-library/react";
import Header from "@/components/portfolio/header";
import { JOHNS_PORTFOLIO } from "../../mocks/portfolio.mocks";

describe(Header.name, () => {
  it("should load header name", () => {
    render(<Header data={JOHNS_PORTFOLIO} />);
    const linkElement = screen.getByRole("heading", {
      name: "Valuation",
    });
    expect(linkElement).toBeInTheDocument();
  });
});
//Todo
// need to finish testing the calculation for the header, ensuring the pence is correct, isnt rounding up
// testing accessibility
//Api calls formatting
