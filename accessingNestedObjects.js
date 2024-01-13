/*https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-objects */


const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = "maps";

myStorage.car.inside;

console.log(myStorage.car.inside);
