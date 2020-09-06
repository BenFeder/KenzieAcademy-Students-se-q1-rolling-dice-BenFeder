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

let rollNumLog2 = document.createElement("div");
rollNumLog2.innerText = `2: ${count[2 - 2]}`;
document.body.append(rollNumLog2);

let rollNumLog3 = document.createElement("div");
rollNumLog3.innerText = `3: ${count[3 - 2]}`;
document.body.append(rollNumLog3);

let rollNumLog4 = document.createElement("div");
rollNumLog4.innerText = `4: ${count[4 - 2]}`;
document.body.append(rollNumLog4);

let rollNumLog5 = document.createElement("div");
rollNumLog5.innerText = `5: ${count[5 - 2]}`;
document.body.append(rollNumLog5);

let rollNumLog6 = document.createElement("div");
rollNumLog6.innerText = `6: ${count[6 - 2]}`;
document.body.append(rollNumLog6);

let rollNumLog7 = document.createElement("div");
rollNumLog7.innerText = `7: ${count[7 - 2]}`;
document.body.append(rollNumLog7);

let rollNumLog8 = document.createElement("div");
rollNumLog8.innerText = `8: ${count[8 - 2]}`;
document.body.append(rollNumLog8);

let rollNumLog9 = document.createElement("div");
rollNumLog9.innerText = `9: ${count[9 - 2]}`;
document.body.append(rollNumLog9);

let rollNumLog10 = document.createElement("div");
rollNumLog10.innerText = `10: ${count[10 - 2]}`;
document.body.append(rollNumLog10);

let rollNumLog11 = document.createElement("div");
rollNumLog11.innerText = `11: ${count[11 - 2]}`;
document.body.append(rollNumLog11);

let rollNumLog12 = document.createElement("div");
rollNumLog12.innerText = `12: ${count[12 - 2]}`;
document.body.append(rollNumLog12);

/* create bar graphs for how many of each result there were during the 1000 rolls,
with the result with highest count set equqal to 100% width, and other counts in proportion to that */

// find array number with maximum count in array, to find length which should be set to 100% width in bar graph

let barMax = 0;
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

// check each bar#count to see if it is greater than the previous barMax num, and reassign new bar#count to barMax if it is greater

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
let bar2 = document.createElement("div");
bar2.style.width = (bar2count / barMax) * 100;
document.append(bar2);

let bar3 = document.createElement("div");
bar3.style.width = (bar3count / barMax) * 100;
document.append(bar3);

let bar4 = document.createElement("div");
bar4.style.width = (bar4count / barMax) * 100;
document.append(bar4);

let bar5 = document.createElement("div");
bar5.style.width = (bar5count / barMax) * 100;
document.append(bar5);

let bar6 = document.createElement("div");
bar6.style.width = (bar6count / barMax) * 100;
document.append(bar6);

let bar7 = document.createElement("div");
bar7.style.width = (bar7count / barMax) * 100;
document.append(bar7);

let bar8 = document.createElement("div");
bar8.style.width = (bar8count / barMax) * 100;
document.append(bar8);

let bar9 = document.createElement("div");
bar9.style.width = (bar9count / barMax) * 100;
document.append(bar9);

let bar10 = document.createElement("div");
bar10.style.width = (bar10count / barMax) * 100;
document.append(bar10);

let bar11 = document.createElement("div");
bar11.style.width = (bar11count / barMax) * 100;
document.append(bar11);

let bar12 = document.createElement("div");
bar12.style.width = (bar12count / barMax) * 100;
document.append(bar12);

// Then render the output to the HTML page.
