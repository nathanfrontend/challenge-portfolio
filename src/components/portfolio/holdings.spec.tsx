import { render, screen } from "@testing-library/react";
import Holdings from "@/components/portfolio/holdings";

describe(Holdings.name, () => {
  it("should load Holding ", () => {
    //With more time i wouldve mocked this component and tested the props were passed down successfully
    // code currently has an error boundary though to avoid this page in general loading if api call fails
    // needs typescript fix
    render(<Holdings />);
    const linkElement = screen.getByRole("heading", {
      name: "Sectors:",
    });
    expect(linkElement).toBeInTheDocument();
  });
});
