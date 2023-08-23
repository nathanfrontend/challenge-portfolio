import { Welcome } from "@/components/welcome/welcome";
import { fireEvent, render, screen } from "@testing-library/react";
import NextLink from "next/link";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

describe(Welcome.name, () => {
  it("should render link to mock API", () => {
    render(<Welcome />);
    const linkElement = screen.getByRole("link", {
      name: "View portfolio mock data",
    });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/portfolio/1");
    expect(linkElement).toHaveAttribute("target", "_blank");
  });

  //Ensure when link is clicked it routes to path
  it("NextLink can be rendered", () => {
    render(<NextLink href="/portfolio/1">View portfolio mock data</NextLink>, {
      wrapper: MemoryRouterProvider,
    });
    fireEvent.click(screen.getByText("View portfolio mock data"));
    expect(mockRouter.asPath).toEqual("/portfolio/1");
  });
});
