import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //state variables
    this.state = {
      userData: {
        name: this.props.name,
        location: this.props.location,
      },
    };

    console.log(this.props.name, "constructor");
  }

  async componentDidMount() {
    console.log(this.props.name, "component did mount");

    const userData = await fetch("https://api.github.com/users/Preethi-Dev");
    const json = await userData.json();

    this.setState({
      userData: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log(this.props.name, "render");
    const { name, location, twitter_username } = this.state.userData;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Conatct: @{twitter_username}</h3>
      </div>
    );
  }
}

export default UserClass;
