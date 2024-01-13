// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup

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
  for (let i = 0; i < contacts.length; i++) {
      if (contacts.firstName = name && contacts == prop) {
          console.log(name)
          }
      else {
          console.log("No such contact")
          return "";
          }    /*
        else if (contacts.likes = prop) {
          console.log(contacts[i].likes)
        }
        else {
          console.log("No such contact")
          return contacts[0].likes;
        }
      }*/
  }
}

lookUpProfile("Kristian", "likes");