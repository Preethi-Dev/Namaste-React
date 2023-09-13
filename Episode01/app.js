//create an h1 React Element
const h1 = React.createElement(
  "h1",
  { id: "heading" }, //attributes to that tag
  "Hello World from React!" //children
);

console.log(h1); //It's an object

//create a root inside React - create a root element on <div id="root"></div>
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render h1 inside root in 2 steps
// 1. Convert object to H1 element
// 2. Put it on DOM
root.render(h1);
