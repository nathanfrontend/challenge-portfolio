import { Welcome } from "@/components/welcome/welcome";
import { render, screen } from "@testing-library/react";

describe(Welcome.name, () => {
  it("should render link to mock API", () => {
    render(<Welcome />);
    const linkElement = screen.getByRole("link", {
      name: "View portfolio mock data",
    });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/api/portfolio/1");
    expect(linkElement).toHaveAttribute("target", "_blank");
  });
});
