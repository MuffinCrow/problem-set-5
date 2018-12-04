/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  var op1 = document.getElementById("mario-easy-output");
  let checky = 1

  do {
    height = prompt("Enter a digit between 1 and 23")
    if (height < 1) {
      checky = false;
    } else if (height > 23) {
      checky = false;
    } else {
      checky = true;
    }
  } while (checky == false);

  height = parseInt(height)
  let width = (height + 1);
  let row = '';
  let i = 0;
  let why = (i + 2);
  let how = (width - why);
  let who = 0;
  let where = 0;
    for (let i = 0; i < height; i++) {
      why = (i + 2);
      how = (width - why);
      who = 0;
      where = 0;
        for (let k = 0; k < width; k++) {
          if (who < how) {
            row = (row += "&nbsp");
            who = (who + 1);
            console.log(who);
          } else if (where < why) {
            row = (row += '#');
            where = (where + 1);
            console.log(where);
          }
        }
        row = row + '<br>';
      }
  console.log(row);
  op1.innerHTML = (`<code>${row}</code>`);
  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  var op2 = document.getElementById("mario-hard-output");
  let checky = 1
  console.log(checky);
  do {
    height = prompt("Enter a digit between 1 and 23");
    if (height < 1) {
      checky = false;
    } else if (height > 23) {
      checky = false;
    } else {
      checky = true;
    }
  } while (checky == false);

console.log(height);
  height = parseInt(height)
  let width = (height + 1);
  let row = '';
  let i = 0;
  let why = (i + 2);
  let how = (width - why);
  let who = 0;
  let where = 0;
    for (let i = 0; i < height; i++) {
      why = (i + 2);
      how = (width - why);
      who = 0;
      where = 0;
        for (let k = 0; k < width; k++) {
          if (who < how) {
            row = (row += "&nbsp");
            who = (who + 1);
            console.log(who);
          } else if (where < why) {
            row = (row += '#');
            where = (where + 1);
            console.log(where);
          }
        }
        row = (row += "&nbsp");
        row = (row += "&nbsp");
        why = (i + 2);
        how = (width - why);
        who = 0;
        where = 0;
        do {
          row = (row += '#');
          where = (where + 1);
        }while (where < why);
        //for (let k = 0; k < width; k++) {
        //  if (where < why) {
        //    row = (row += '#');
        //    where = (where + 1);
        //    console.log(where);
        //  } else if (who < how) {
        //    row = (row += "&nbsp");
        //    who = (who + 1);
        //    console.log(who);
        //  }
        //}


        row = row + '<br>';
      }
  console.log(row);
  op2.innerHTML = (`<code>${row}</code>`);

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  var op3 = document.getElementById("credit-output");
  let str = "";
  function countDecimals(num) {
      var sep = String(23.32).match(/\D/)[0];
      var b = String(num).split(sep);
    return b[1]? b[1].length : 0;
  }
  let checky = 0;
  let credit = [];
  let c = 0

  do {
    card = prompt("Enter your credit card number below");
    if (isNaN(card)) {
      alert("Please enter a credit card number.");
      checky = 3;
    }else if (countDecimals(card) != 0) {
      alert("Please enter a credit card number.");
      checky = 3;
    }else if (card < 0 && card < 9999999999999999) {
      alert("Please enter a credit card number.");
    }else if (card.length > 16 || card.length < 13) {
      alert("Please enter a credit card number.");
    }else {
      alert("Validitating...");
      checky = -1;
      credit = card.split("");
      console.log(credit);
      c = 0;
      let cd = 0;

      var imgValid = document.createElement("img");
      var imgMaster = document.createElement("img");
      var imgAmex = document.createElement("img");
      var imgVisa = document.createElement("img");
      imgVisa.src = "./images/visa.png";
      imgMaster.src = "./images/mastercard.png";
      imgAmex.src = "./images/amex.png";
      imgValid.src = "./images/invalid.png";

      for (c = 0; c < credit.length; c++) {
        credit[c] = Number(credit[c]);
      }
      credit = Number(credit);
      op3.innerHTML = str;
      c = 0;
        if (credit.length == 15 && ((credit[0] == 3 && credit[1] == 4) || (credit[0] == 3 && credit[1] == 7))) {
          let y = 1;
          for(c = 0; c < credit.length; c++) {
            if (y % 2 == 0) {
              credit[c] = (credit[c] * 2);
              console.log(credit);
              y++;
              if (credit[c] > 9) {
                credit[c] = (credit[c] - 9);
              }
            }else{
              y++;
            }
            cd = (credit[c] + cd);
          }
          if (cd % 10 == 0) {
            op3.appendChild(imgAmex);
          }else {
            op3.appendChild(imgValid);
          }
        }else if (credit.length == 16 && credit[0] == 5 && (credit[1] == 1 || credit[1] == 2 || credit[1] == 3 || credit[1] == 4 || credit[1] == 5)) {
          let y = 2;
          for(c = 0; c < credit.length; c++) {
            if (y % 2 == 0) {
              credit[c] = (credit[c] * 2);
              console.log(credit);
              y++;
              if (credit[c] > 9) {
                credit[c] = (credit[c] - 9);
              }
            }else{
              y++;
            }
            cd = (credit[c] + cd);
          }
          if (cd % 10 == 0) {
            op3.appendChild(imgMaster);
          }else {
            op3.appendChild(imgValid);
          }
        }else if ((credit.length == 13 || credit.length == 16) && credit[0] == 4) {
          if (credit.length == 13) {
            let y = 1;
            for(c = 0; c < credit.length; c++) {
              if (y % 2 == 0) {
                credit[c] = (credit[c] * 2);
                console.log(credit);
                y++;
                if (credit[c] > 9) {
                  credit[c] = (credit[c] - 9);
                }
              }else{
                y++;
              }
              cd = (credit[c] + cd);
            }
            if (cd % 10 == 0) {
              op3.appendChild(imgVisa);
            }else {
              op3.appendChild(imgValid);
            }
          }else if (credit.length == 16) {
            let y = 2;
            for(c = 0; c < credit.length; c++) {
              if (y % 2 == 0) {
                credit[c] = (credit[c] * 2);
                console.log(credit);
                y++;
                if (credit[c] > 9) {
                  credit[c] = (credit[c] - 9);
                }
              }else{
                y++;
              }
              cd = (credit[c] + cd);
            }
            if (cd % 10 == 0) {
              op3.appendChild(imgVisa);
            }else {
              op3.appendChild(imgValid);
            }
          }
        }else {
          op3.appendChild(imgValid);
        }

    }
  }while (checky != (-1))
  console.log(card);
//  credit = card.split("");
//  console.log(credit);
//c = 0;
//let cd = 0;
//  for (let z = 0; z < credit.length; z++) {
//    cd.concat(credit[c]);
//    c++;
//  }
//console.log(cd);
//console.log(cd.length);



  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}
/*var imgValid = document.createElement("img");
var imgMaster = document.createElement("img");
var imgAmex = document.createElement("img");
var imgVisa = document.createElement("img");
imgVisa.src = "./images/visa.png";
imgMaster.src = "./images/mastercard.png";
imgAmex.src = "./images/amex.png";
imgValid.src = "./images/invalid.png";

for (c = 0; c < credit.length; c++) {
  credit[c] = Number(credit[c]);
}

op3.innerHTML = str;
c = 0;
  if (credit.length == 15 && ((credit[0] == 3 && credit[1] == 4) || (credit[0] == 3 && credit[1] == 7))) {
    let y = 1;
    for(c = 0; c < credit.length; c++) {
      if (y % 2 == 0) {
        credit[c] = (credit[c] * 2);
        console.log(credit);
        y++;
        if (credit[c] > 9) {
          credit[c] = (credit[c] - 9);
        }
      }else{
        y++;
      }
      cd = (credit[c] + cd);
    }
    if (cd % 10 == 0) {
      op3.appendChild(imgAmex);
    }else {
      op3.appendChild(imgValid);
    }
  }else if (credit.length == 16 && credit[0] == 5 && (credit[1] == 1 || credit[1] == 2 || credit[1] == 3 || credit[1] == 4 || credit[1] == 5)) {
    let y = 2;
    for(c = 0; c < credit.length; c++) {
      if (y % 2 == 0) {
        credit[c] = (credit[c] * 2);
        console.log(credit);
        y++;
        if (credit[c] > 9) {
          credit[c] = (credit[c] - 9);
        }
      }else{
        y++;
      }
      cd = (credit[c] + cd);
    }
    if (cd % 10 == 0) {
      op3.appendChild(imgMaster);
    }else {
      op3.appendChild(imgValid);
    }
  }else if ((credit.length == 13 || credit.length == 16) && credit[0] == 4) {
    if (credit.length == 13) {
      let y = 1;
      for(c = 0; c < credit.length; c++) {
        if (y % 2 == 0) {
          credit[c] = (credit[c] * 2);
          console.log(credit);
          y++;
          if (credit[c] > 9) {
            credit[c] = (credit[c] - 9);
          }
        }else{
          y++;
        }
        cd = (credit[c] + cd);
      }
      if (cd % 10 == 0) {
        op3.appendChild(imgVisa);
      }else {
        op3.appendChild(imgValid);
      }
    }else if (credit.length == 16) {
      let y = 2;
      for(c = 0; c < credit.length; c++) {
        if (y % 2 == 0) {
          credit[c] = (credit[c] * 2);
          console.log(credit);
          y++;
          if (credit[c] > 9) {
            credit[c] = (credit[c] - 9);
          }
        }else{
          y++;
        }
        cd = (credit[c] + cd);
      }
      if (cd % 10 == 0) {
        op3.appendChild(imgVisa);
      }else {
        op3.appendChild(imgValid);
      }
    }
  }else {
    op3.appendChild(imgValid);
  }

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {
  var op4 = document.getElementById("guess-output");
  let random = Math.floor((Math.random() * 1000) + 1).toFixed(0);
  let guess = 0;
  let guessAmount = 0;
  let guessValue = 0;
  let guessOut = 0;
  let end = 0;
  do {
    guess = prompt("Guess the number between 1 and 1000");
    if (guess >= 1 && guess < random) {
      guessValue = 1;
      guessAmount++;
    }else if (guess <= 1000 && guess > random) {
      guessValue = 2;
      guessAmount++;
    }else if (guess == random) {
      guessValue = 5;
      guessAmount++;
    } else {
      guessValue = 3;
    }
console.log(guessAmount);
console.log(guessValue);
    switch (guessValue) {
      case 1:
        guessOut = ("Higher");
        alert(`${guessOut}`);
        break;
      case 2:
        guessOut = ("Lower");
        alert(`${guessOut}`);
        break;
      case 3:
        guessOut = ("Invalid");
        alert(`${guessOut}`);
        break;
      case 5:
        break;
    }
    console.log(guessOut);
  }while (guess !== random)
    op4.innerHTML = (`You guessed the answer ${random} in ${guessAmount} tries!`);
  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY

  let op5 = document.getElementById("hurricane-output");
  function countDecimals(num) {
      var sep = String(23.32).match(/\D/)[0];
      var b = String(num).split(sep);
    return b[1]? b[1].length : 0;
  }
  do {
    windspeed = prompt("Enter a windspeed:")
    if (windspeed == NaN) {
      alert("Please enter a valid number!")
    }else if (countDecimals(windspeed) > 0) {
      alert("Make sure the number is an integer!")
    }else if (windspeed < 0) {
      alert("Please enter a positive integer!")
    }else if (isNaN(windspeed)) {
    alert("The number entered includes a non number value!")
  }
}while (countDecimals(windspeed) > 0 || windspeed < 0 || isNaN(windspeed))
  let checky = "done";
  console.log(countDecimals(windspeed));
  console.log(checky);
  windspeed = parseInt(windspeed);

  if (windspeed >= 39 && windspeed <= 73) {
    op5.innerHTML = (`Tropical Storm.`)
  }else if (windspeed >= 74 && windspeed <= 95) {
    op5.innerHTML = (`Category 2 Hurricane.`)
  }else if (windspeed >= 96 && windspeed <= 110) {
    op5.innerHTML = (`Category 2 Hurricane.`)
  }else if (windspeed >= 111 && windspeed <= 129) {
    op5.innerHTML = (`Category 3 Hurricane.`)
  }else if (windspeed >= 130 && windspeed <= 156) {
    op5.innerHTML = (`Category 4 Hurricane.`)
  }else if (windspeed >= 157) {
    op5.innerHTML = (`Category 5 Hurricane.`)
  }else if (windspeed < 39) {
    op5.innerHTML = (`The skies are calm...`)
  }

  console.log(windspeed);
  console.log(typeof windspeed);
  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  let op6 = document.getElementById("gymnastics-output");
for(let i = 0; i < 6; i++) {
  do {
    scores[i] = Number(prompt("Enter a score between 0.0  and 10.0"));
    scores[i].toFixed(2);
    console.log(scores[i]);
    if (isNaN(scores[i])) {
      alert("Please enter a number!")
      checky = false;
    }else if (scores[i] < 0 || scores[i] > 10) {
      alert("Please enter a score between 0.0 and 10.0!")
      checky = false;
    } else {
      checky = true;
    }
  }while (checky == false)
}
console.log(scores);
scores.sort(function(a, b){return a-b});
console.log(scores);
total = scores[1] + scores[2] + scores[3] + scores[4];
let avg = (total / 4).toFixed(2);
console.log(scores[0]);
console.log(scores[5]);
op6.innerHTML = (`Discarded: ${scores[0]}, ${scores[5]}</br>Score: ${avg}`);

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  let op7 = document.getElementById("report-card-output");
  let t = 0;
  let k = 0;
  let testGrades = [];

  do {
    testGrades[t] = prompt("Enter a test grade percent. To move on to quiz grades, enter -1:")
    if (testGrades[t] < 0 && testGrades[t] > -1) {
      alert("Please enter a valid number")
    }else if (testGrades[t] < -1) {
      alert("Please enter a valid number")
    }else if (isNaN(testGrades[t])) {
      alert("Please enter a valid number")
    }else if (testGrades[t] > 100) {
      alert("Please enter a valid number")
    }else {
      k = testGrades[t];
      testGrades[t] = (testGrades[t] / 100);
      t = (t + 1);
    }
  }while (k != (-1))

  testGrades.pop();
  console.log(testGrades);

  let q = 0;
  k = 0;
  let quizGrades = [];

  do {
    quizGrades[q] = prompt("Enter a quiz grade percent. To move on to homework grades, enter -1:")
    if (quizGrades[q] < 0 && quizGrades[q] > -1) {
      alert("Please enter a valid number")
    }else if (quizGrades[q] < -1) {
      alert("Please enter a valid number")
    }else if (isNaN(quizGrades[q])) {
      alert("Please enter a valid number")
    }else if (quizGrades[q] > 100) {
      alert("Please enter a valid number")
    }else {
      k = quizGrades[q];
      quizGrades[q] = (quizGrades[q] / 100);
      q = (q + 1);
    }
  }while (k != (-1))

  quizGrades.pop();
  console.log(quizGrades);

  let h = 0;
  k = 0;
  let homeworkGrades = [];

  do {
    homeworkGrades[h] = prompt("Enter a homework grade percent. To get the final grade, enter -1:")
    if (homeworkGrades[h] < 0 && homeworkGrades[h] > -1) {
      alert("Please enter a valid number")
    }else if (homeworkGrades[h] < -1) {
      alert("Please enter a valid number")
    }else if (isNaN(homeworkGrades[h])) {
      alert("Please enter a valid number")
    }else if (homeworkGrades[h] > 100) {
      alert("Please enter a valid number")
    }else {
      k = homeworkGrades[h];
      homeworkGrades[h] = (homeworkGrades[h] / 100);
      h = (h + 1);
    }
  }while (k != (-1))

  homeworkGrades.pop();
  console.log(homeworkGrades);

  for (t = 0; t < testGrades.length; t++) {
  testTotal = (testTotal + testGrades[t]);
}
  let testOut = (testTotal / testGrades.length);
//  testOut = (testOut / 100);

  for (q = 0; q < quizGrades.length; q++) {
  quizTotal = (quizTotal + quizGrades[q]);
}
  let quizOut = (quizTotal / quizGrades.length);
//  quizOut = (quizOut / 100);

  for (h = 0; h < homeworkGrades.length; h++) {
  homeworkTotal = (homeworkTotal + homeworkGrades[h]);
}
  let homeworkOut = (homeworkTotal / homeworkGrades.length);
//  homeworkOut = (homeworkOut / 100);

  testAVG = (testOut * 0.6);
  quizAVG = (quizOut * 0.3);
  homeworkAVG = (homeworkOut * 0.1);
//  testOut.toFixed(2);
//  quizOut.toFixed(2);
//  homeworkOut.toFixed(2);
  testOut = Math.round(testOut * 100) / 100;
  quizOut = Math.round(quizOut * 100) / 100;
  homeworkOut = Math.round(homeworkOut * 100) / 100;

  let gradeTotal = (testAVG + quizAVG + homeworkAVG);
  gradeTotal = Math.round(gradeTotal * 100) / 100;


  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  tests = testGrades.length;
  quizzes = quizGrades.length;
  homeworks = homeworkGrades.length;

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

   op7.innerHTML = (`Tests: ${testOut}</br>Quizzes: ${quizOut}</br>Homework: ${homeworkOut}</br>Grade: ${gradeTotal}`);


  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
