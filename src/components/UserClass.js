import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatarUrl: "Dummy Photo",
      },
    };
    console.log("constructor called");
  }

  async componentDidMount() {
    console.log("component mounted");

    const response = await fetch("https://api.github.com/users/sohamjani48");
    const jsonData = await response.json();

    this.setState({
      userInfo: jsonData,
    });
  }

  componentDidUpdate() {
    console.log("Component did update called");
  }

  componentWillUnmount() {
    console.log("Component will unmount caleld");
  }

  render() {
    console.log("render called");

    const { name, location = "lol", avatar_url } = this.state.userInfo;

    return (
      <div className="flex flex-col">
        <img
          alt="User Profie"
          src={avatar_url}
          className="w-[200px] h-[200px] rounded-full m-4"
        />
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h2 className="font-bold text-lg mx-4">Name: {loggedInUser}</h2>
          )}
        </UserContext.Consumer>
        <h3 className="text-md mx-4">Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
