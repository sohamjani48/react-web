import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";

const rootReact = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const ContactUs = lazy(() => import("./components/ContactUs"));

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const AppLayout = () => {
  const [username, setUsername] = useState();

  //authentication
  useEffect(() => {
    // Make API call and send username and password
    const data = { name: "Soham Jani" };

    setUsername(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading About Page...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>Loading Contact Us Page...</div>}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<div>Loading Restaurant Menu page...</div>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading Grocery Component.</div>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

rootReact.render(<RouterProvider router={appRouter} />);
