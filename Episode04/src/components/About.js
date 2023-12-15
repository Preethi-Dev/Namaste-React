import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Us</h1>
        <UserContext.Consumer>
          {(data) => <h2 className="font-bold">{data.loggedInInfo}</h2>}
        </UserContext.Consumer>

        <UserClass name={"First (class)"} location={"TamilNadu"} />
      </div>
    );
  }
}

export default About;
