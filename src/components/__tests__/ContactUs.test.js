import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../ContactUs";

describe("Contact Page Test cases", () => {
  beforeAll(() => {
    console.log("Before All");
  });

  afterAll(() => {
    console.log("After All");
  });

  it("Should load contact us component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  afterEach(() => {
    console.log("After Each");
  });

  it("Should load button inside Contact component", () => {
    render(<ContactUs />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Should load input with name placeholder inside Contact component", () => {
    render(<ContactUs />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load two input boxes on Contact Component", () => {
    render(<ContactUs />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
