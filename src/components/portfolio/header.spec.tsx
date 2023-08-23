import { render, screen } from "@testing-library/react";
import Header from "@/components/portfolio/header";

describe(Header.name, () => {
  it("should load header name", () => {
    //With more time i wouldve mocked this component and tested the props were passed down successfully
    // code currently has an error boundary though to avoid this page in general loading if api call fails
    // needs typescript fix
    render(<Header />);
    const linkElement = screen.getByRole("heading", {
      name: "Valuation",
    });
    expect(linkElement).toBeInTheDocument();
  });
});
