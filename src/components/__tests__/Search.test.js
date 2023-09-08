import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../../components/mocks/ResListDataMock.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

beforeAll(() => {
  console.log("Before All");
});

it("Should search Res List for Burger test input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);
});

beforeEach(() => {
  console.log("Before Each");
});

it("Should filter Top Rated Restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const filterButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  const unfilteredRestaurantCards = screen.getAllByTestId("resCard");

  expect(unfilteredRestaurantCards.length).toBe(20);

  fireEvent.click(filterButton);

  const filteredRestaurantCards = screen.getAllByTestId("resCard");

  expect(filteredRestaurantCards.length).toBe(17);
});
