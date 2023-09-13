/*

<div id="parent">
  <div id="child1">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
  <div id="child2">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
</div>

*/

//create an h1 React Element
// const h1 = React.createElement(
//   "h1",
//   { id: "heading" }, //attributes to that tag
//   "Hello World from React!" //children
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

console.log(parent); //It's an object

//create a root inside React - create a root element on <div id="root"></div>
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render parent inside root in 2 steps
// 1. Convert object to parent element
// 2. Put it on DOM
root.render(parent);
