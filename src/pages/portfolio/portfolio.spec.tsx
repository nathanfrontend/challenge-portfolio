import { render, screen } from "@testing-library/react";
import Portfolio from "./[id]";
import mockRouter from "next-router-mock";
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes";

mockRouter.useParser(
  createDynamicRouteParser([
    // These paths should match those found in the `/pages` folder:
    "/portfolio/[id]",
  ]),
);
// Dynamic route is matched - added in the mock router library to avoid mounting issues of use router when testing
describe(Portfolio.name, () => {
  it("should route to dynamic page", () => {
    mockRouter.push("/portfolio/1");
    expect(mockRouter).toMatchObject({
      pathname: "/portfolio/[id]",
      query: { id: "1" },
    });
  });
});
