import { render } from "@testing-library/svelte";
import Dog from "./Dog.svelte";

describe("Dog", () => {
  test("shows default label", () => {
    const { getByText } = render(Dog);

    expect(getByText(/dog/i)).toBeInTheDocument();
  });

  test("has a customisable label", () => {
    const { getByText } = render(Dog, { msg: "World" });
    expect(getByText(/world/i)).toBeInTheDocument();
  });
});
