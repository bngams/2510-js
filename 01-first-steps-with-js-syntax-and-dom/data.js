let something = "test";
const anotherThing = "anotherTest";

export const somePublicVariable = "publicValue";

// Exporting the variables => pattern named export (modules js)
export const data = {
  something,
  anotherThing
};

console.log("Data module loaded");
(function init() {
  console.log("This is an internal function executed on load");
})();