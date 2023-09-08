import { render, screen } from "@testing-library/react";
import RestaurantCard, { withVegLabel } from "../../components/RestaurantCard";
import MOCK_DATA from "../../components/mocks/ResCardMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurant Card component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Domino's Pizza");

  expect(name).toBeInTheDocument();
});

// it("Should render Restaurant Card component with Veg Label", () => {
//   const RestaurantCardVeg = withVegLabel(RestaurantCard);
//   render(<RestaurantCardVeg resData={MOCK_DATA} />);

//   const vegLabelText = screen.getByText("Pure Vg");

//   expect(vegLabelText).toBeInTheDocument();
// });
