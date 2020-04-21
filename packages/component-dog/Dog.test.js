import { render } from "@testing-library/svelte";
import Comp from "./Dog.svelte";

describe("Dog", () => {
  test("shows default label", () => {
    const { getByText } = render(Comp);

    expect(getByText(/dog/i)).toBeInTheDocument();
  });

  test("has a customisable label", () => {
    const { getByText } = render(Comp, { msg: "World" });
    expect(getByText(/world/i)).toBeInTheDocument();
  });
});
