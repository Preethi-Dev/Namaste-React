import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <User name={"Preethi"} location={"TamilNadu"} />
      <UserClass name={"Preethi (class)"} location={"TamilNadu"} />
    </div>
  );
};

export default About;
