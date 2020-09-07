// Your Code Here!

// Create a function that "rolls a die" and give you a number 1-6.

function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}

// Then roll two dice and add them together.

function rollDice() {
  let roll1 = rollDie();
  let roll2 = rollDie();

  let bothRolled = roll1 + roll2;

  return bothRolled;
}

// Do that 1000 times and create an array of how frequently each result occurrs.
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // count results 2 through 12 frequency

for (let rollNum = 1; rollNum <= 1000; rollNum++) {
  let rollResult = rollDice();
  count[rollResult - 2]++;
}

let bar2count = count[2 - 2];
let bar3count = count[3 - 2];
let bar4count = count[4 - 2];
let bar5count = count[5 - 2];
let bar6count = count[6 - 2];
let bar7count = count[7 - 2];
let bar8count = count[8 - 2];
let bar9count = count[9 - 2];
let bar10count = count[10 - 2];
let bar11count = count[11 - 2];
let bar12count = count[12 - 2];

let rollNumLog2 = document.createElement("div");
rollNumLog2.innerText = `2: ${bar2count}`;
document.body.append(rollNumLog2);

let rollNumLog3 = document.createElement("div");
rollNumLog3.innerText = `3: ${bar3count}`;
document.body.append(rollNumLog3);

let rollNumLog4 = document.createElement("div");
rollNumLog4.innerText = `4: ${bar4count}`;
document.body.append(rollNumLog4);

let rollNumLog5 = document.createElement("div");
rollNumLog5.innerText = `5: ${bar5count}`;
document.body.append(rollNumLog5);

let rollNumLog6 = document.createElement("div");
rollNumLog6.innerText = `6: ${bar6count}`;
document.body.append(rollNumLog6);

let rollNumLog7 = document.createElement("div");
rollNumLog7.innerText = `7: ${bar7count}`;
document.body.append(rollNumLog7);

let rollNumLog8 = document.createElement("div");
rollNumLog8.innerText = `8: ${bar8count}`;
document.body.append(rollNumLog8);

let rollNumLog9 = document.createElement("div");
rollNumLog9.innerText = `9: ${bar9count}`;
document.body.append(rollNumLog9);

let rollNumLog10 = document.createElement("div");
rollNumLog10.innerText = `10: ${bar10count}`;
document.body.append(rollNumLog10);

let rollNumLog11 = document.createElement("div");
rollNumLog11.innerText = `11: ${bar11count}`;
document.body.append(rollNumLog11);

let rollNumLog12 = document.createElement("div");
rollNumLog12.innerText = `12: ${bar12count}`;
document.body.append(rollNumLog12);

/* create bar graphs for how many of each result there were during the 1000 rolls,
with the result with highest count set equqal to 100% width, and other counts in proportion to that */

// find array number with maximum count in array, to find length which should be set to 100% width in bar graph

// check each bar#count to see if it is greater than the previous barMax num, and reassign new bar#count to barMax if it is greater

let barMax = 0;

if (bar2count > barMax) {
  barMax = bar2count;
}

if (bar3count > barMax) {
  barMax = bar3count;
}

if (bar4count > barMax) {
  barMax = bar4count;
}

if (bar5count > barMax) {
  barMax = bar5count;
}

if (bar6count > barMax) {
  barMax = bar6count;
}

if (bar7count > barMax) {
  barMax = bar7count;
}

if (bar8count > barMax) {
  barMax = bar8count;
}

if (bar9count > barMax) {
  barMax = bar9count;
}

if (bar10count > barMax) {
  barMax = bar10count;
}

if (bar11count > barMax) {
  barMax = bar11count;
}

if (bar12count > barMax) {
  barMax = bar12count;
}

// set width of each bar#(2-12) to be relative to 100% width of barMax width

document.getElementsByClassName("bar").style.background = "red";

document.getElementsByClassName(
  "bar2"
).style.width = `(${bar2count} / ${barMax}) * 100`;

document.getElementsByClassName(
  "bar3"
).style.width = `(${bar3count} / ${barMax}) * 100`;

document.getElementsByClassName(
  "bar4"
).style.width = `(${bar4count} / ${barMax}) * 100`;

document.getElementsByClassName(
  "bar5"
).style.width = `(${bar5count} / ${barMax}) * 100`;

document.getElementsByClassName(
  "bar6"
).style.width = `(${bar6count} / ${barMax}) * 100`;

document.getElementsByClassName(
  "bar7"
).style.width = `(${bar7count} / ${barMax}) * 100`;

document.getElementsByClassName(
  "bar8"
).style.width = `(${bar8count} / ${barMax}) * 100`;

document.getElementsByClassName(
  "bar9"
).style.width = `(${bar9count} / ${barMax}) * 100`;

document.getElementsByClassName(
  "bar10"
).style.width = `(${bar10count} / ${barMax}) * 100`;

document.getElementsByClassName(
  "bar11"
).style.width = `(${bar11count} / ${barMax}) * 100`;

document.getElementsByClassName(
  "bar12"
).style.width = `(${bar12count} / ${barMax}) * 100`;

// Then render the output to the HTML page.
