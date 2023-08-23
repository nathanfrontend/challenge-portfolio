import { getAllByTestId, render, screen, within } from "@testing-library/react";
import Holdings from "@/components/portfolio/holdings/holdings";
import { TokenList } from "./tokenList";
import { JOHNS_PORTFOLIO } from "@/mocks/portfolio.mocks";

describe(Holdings.name, () => {
  it("should load Holding ", () => {
    render(<Holdings data={JOHNS_PORTFOLIO} />);
    const linkElement = screen.getByRole("heading", {
      name: "Sectors:",
    });
    expect(linkElement).toBeInTheDocument();
  });

  it("should render 4 list items ", () => {
    // using the api data as mock data to provide my component with props
    render(<TokenList data={JOHNS_PORTFOLIO} />);

    const list = screen.getByRole("list", {
      name: /tokens/i,
    });
    const listitems = screen.getAllByRole("listitem");

    expect(listitems.length).toBe(4);
  });
});

//Todo
// Test locale formatting
//Test Currency formatting
//Testing Conditional css colours
