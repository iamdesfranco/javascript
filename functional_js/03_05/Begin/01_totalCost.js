// Learning Functional Programming with Javascript
// Chapter 03, Video 05, Exercise 01

//Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(arr, name, prop){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].firstName === name) {
      console.log("Gotcha: " + name)

      for(var k = 0; k < arr[i].likes.length; k++) {
        if(arr[i].likes === prop) {
          console.log("Yep, they like " + prop);
        } else {
          return "Nope, they dont like that";
        }
      }
    }
  }
}


lookUpProfile(contacts,"Akira", "Pizza");