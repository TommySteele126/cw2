const myNumberList = [12, 2112, 9000, 1999, 24];

let max = 0;
let finalMax = 0;
for (i = 0; i < myNumberList.length; i++) {
  if (myNumberList[i] > max) {
    max = myNumberList[i];
  }
}

console.log(max);

exercise1 = () => {
  let name_array = [];
  let userQuestions = true;
  let quit = "Q".toLowerCase();

  while (userQuestions) {
    //let askUser = prompt("Enter a word or press q to quit");
    name_array.push(askUser);

    if (askUser === quit) {
      // what happens if user press 'q' or 'Q'??
      userQuestions === false; // turns to false or questions turns OFF.
      break; // break the loop
    }
  }
  console.log(name_array); // store the entires in the console.log!!
};
// exercise1(); The  First EXERCISE

Theexercise2 = () => {
  let userinput = prompt("Enter a number");

  for (index = 1; index <= userinput; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log(`FIZZBUZZ ${index}`);
    } else if (index % 3 === 0) {
      console.log(`FIZZ ${index}`);
    }
    // * If the current number is evenly divisible by 5 you should print "BUZZ" and the number
    else if (index % 5 === 0) {
      console.log(`BUZZ ${index}`);
    } else {
      console.log(`${index}`);
    }
  }
};

// EXERCISE 2

// // * If the current number is evenly divisible by both 3 and 5 you should print "FIZZBUZZ" and the number
// if (userinput % 3 === 0 && userinput % 5 === 0)
// {
//     console.log(`FIZZBUZZ ${userinput}`);
// }
// // * If the current number is evenly divisible by 3 you should print "FIZZ" and the number
// else if (userinput % 3 === 0)
// {
//     console.log(`FIZZ ${userinput}`);

// }
// // * If the current number is evenly divisible by 5 you should print "BUZZ" and the number
// else if(userinput % 5 === 0)
// {
//     console.log(`BUZZ ${userinput}`);
// }
// // * Otherwise, just print the number to the console
// else{console.log(`${userinput}`)};

    extra= () => {
  let sprite = document.getElementById("IMAGE");

  sprite.src = `./guyfolder/guy1.png`;

  let index = 1;

  let animation = setInterval(() => {
    if (index === 10) {
      index = 1;
    }
    sprite.src = `./guyfolder/guy${index}.png`;
    index++;
  }, 500);
};

extra1();
