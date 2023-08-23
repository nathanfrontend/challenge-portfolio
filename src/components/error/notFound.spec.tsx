import { render, screen } from "@testing-library/react";
import Header from "@/components/portfolio/header/header";
import NotFound from "./notFound";

describe(Header.name, () => {
  it("should load header name", () => {
    render(<NotFound id={1} />);
    const linkElement = screen.getByRole("heading", {
      name: "Portfolio not found",
    });
    expect(linkElement).toBeInTheDocument();
  });
});
