//LINK TO PROBLEM https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup

//NOTE: BETTER VERSION OF FOR LOOP AT BOTTOM.

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let a = false;
  let b = false;
  let c = false;

  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name && contacts[i][prop] !== undefined) {
      a = true;
      console.log(contacts[i][prop]);
      return contacts[i][prop];
    } else if (contacts[i].firstName !== name) {
    } else if (contacts[i][prop] === undefined) {
      c = true;
    }
  }
  
  if (!a && !c) {
    b = true;
  }
  
  if (b) {
    console.log("No such contact");
    return "No such contact";
  } else if (c) {
    console.log("No such property");
    return "No such property";
  }
  
  // Only change code above this line
}
lookUpProfile("Akira", "likes")
//lookUpProfile("Bob", "potato")
//lookUpProfile("Akira", "address")

//MORE EFFICIENT CODE BELOW

/*function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i][prop] !== undefined) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }

  return "No such contact";
}

lookUpProfile("Kristian", "lastName");*/

/* CODE EXPLANATION 

This JavaScript code is designed to look through an array of contact objects and return first a property value if the name and property both exist, second 'No such property' if the name exists but the property does not, and third 'No such contact' if the name does not exist in any object.

- We begin by defining an array of contact objects named `contacts`. Each object contains properties that include `firstName`, `lastName`, `number` and `likes`.

- The function `lookUpProfile(name, prop)` takes two arguments: `name`, and `prop`.

- Then, three boolean variables `a`, `b`, and `c` are declared and initialized to `false`.

- Inside the function, a loop iterates over the `contacts` array.

- it checks to see if the `firstName` of a contact matches the `name` argument and the property (`prop`) exists in the contact's properties. If true, the function logs and returns the property's value, and assigns `true` to the variable `a`.

- The further checks are applied when the first condition fails - if the `firstName` does not match, the loop just skips to the next iteration. If the `prop` does not exist in contacts, `c` is assigned `true`.

- After the loop, if `a` and `c` are still `false`, `b` is assigned `true`, which means there is no contact with the given `name`.

- Depending on whether `b` or `c` is `true`, the function logs and returns either "No such contact" or "No such property".

The code also includes a more efficient version of the `lookUpProfile(name, prop)` function in the comments. This version of the function does not require extra boolean variables or the checks after the loop. It directly returns the appropriate outcomes during the loop iterations or "No such contact" after the loop if no `firstName` matches the `name`.
*/