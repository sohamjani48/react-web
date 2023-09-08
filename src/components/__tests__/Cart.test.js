import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/ResMenuMock.json";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load Restaurant Menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Recommended (18)");

  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("menuItem");
  expect(foodItems.length).toBe(18);

  const addBtns = screen.getAllByRole("button", { name: "+ Add" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart (2)")).toBeInTheDocument();

  expect(screen.getAllByTestId("menuItem").length).toBe(20);

  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(clearCartBtn);

  expect(screen.getAllByTestId("menuItem").length).toBe(18);
  expect(
    screen.getByText("Your Cart is Empty !! Please add items in your cart")
  ).toBeInTheDocument();
});
