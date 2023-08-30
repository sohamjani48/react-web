import React from "react";
import ReactDOM from "react-dom/client";

// createElement( the tag which we want, place where we give attributes to the tag, what we want to put in the tag)
const headingReact = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello From React!"
);

console.log(headingReact);

//we needs to have root where the DOM manipulation will happen
const rootReact = ReactDOM.createRoot(document.getElementById("root"));

// .render function's job is to take the object passed, convert it into Html that js can understand and render it,
rootReact.render(headingReact);

// Multi level structure
/*
   
      <div id="parent">
          <div id="child">
              <h1>Heading</h1>
              <h2>Sibling</h2>
          </div>
      </div>
    
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading1" },
      "Test Heading with heading1 id"
    ),
    React.createElement("h2", { id: "Sibling" }, "This is Sibling Heading"),
  ]),
  React.createElement("span", { id: "span1" }, [
    React.createElement("p", {}, "Some random Paragraph"),
  ]),
  React.createElement("div", { id: "div3" }, "Yoooo"),
]);

rootReact.render(parent);
