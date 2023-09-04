import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
  return (
    <div className="m-4">
      <h1 className="flex font-bold text-xl">About</h1>
      <div className="flex my-4 font-serif text-lg">
        This is the about component.
      </div>
      <div>Logged In User:</div>
      <UserContext.Consumer>
        {({ loggedInUser }) => (
          <h2 className="text-lg font-bold">{loggedInUser}</h2>
        )}
      </UserContext.Consumer>
      <UserClass />
    </div>
  );
};

export default About;
