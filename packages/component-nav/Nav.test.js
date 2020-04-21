import { render } from "@testing-library/svelte";
import Nav from "./Nav.svelte";

const renderUI = () => render(Nav, { segment: "home" });

describe("Nav", () => {
  test("Renders a nav role", () => {
    const { getByRole } = renderUI();
    expect(getByRole("navigation")).toBeInTheDocument();
  });

  test("Has home link", () => {
    const { getByText } = renderUI();
    expect(getByText(/home/i)).toBeInTheDocument();
  });

  test("Has about link", () => {
    const { getByText } = renderUI();
    expect(getByText(/about/i)).toBeInTheDocument();
  });

  test("Has styleguide link", () => {
    const { getByText } = renderUI();
    expect(getByText(/styleguide/i)).toBeInTheDocument();
  });

  test("Has blog link", () => {
    const { getByText } = renderUI();
    expect(getByText(/blog/i)).toBeInTheDocument();
  });
});
