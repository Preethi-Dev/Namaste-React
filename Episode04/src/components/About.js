import React from "react";
import User from "./User";
import UserClass from "./UserClass";

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

        <UserClass name={"First (class)"} location={"TamilNadu"} />
      </div>
    );
  }
}

export default About;
