//car and cat
const regExp1 = /ca/gi;
console.log(regExp1.test(/cat Car/));

//pop and prop
const regExp2 = /op/i;
console.log(regExp2.test(/pop prop/));

//ferret, ferry, and ferrari
const regExp3 = /^ferr/i;
console.log(regExp3.test("ferret ferry, ferrari"));
console.log("ferret ferry ferrari referral".match(regExp3));

//Any word ending in ious
const regExp4 = /(ious)+/g;
const arr = ["Religious", "Ominious", "Delicious", "Spacious", "Glorious"];
console.log("Religious Ominious Delicious Spacious Glorious".match(regExp4));
// console.log(regExp4.exec("Religious Ominious Delicious Spacious Glorious"));

//Detect any of the characters listed that comes after a whitespace or any kind of space.
const regExp5 = /[\s.,;:]/;
console.log(regExp5.test("final; win-win"));

//Get word longer than 6 characters long
const regExp6 = /\b\w{7,}\b/g;
console.log("available match short masses snippets".match(regExp6));

//Get Characters without uppercase/lowercase letter E.
const regExp7 = /\b[^eE\s]+\b/g;
console.log("slide preservatives, pin, bait, battling".match(regExp7));

//Second Question Begins Here...
console.log("Second Question Begins Here...");

const singleQuotes = /'([^']+)'/g;
let input =
  "What stood out for you at today's presentation? She replied 'I now know JavaScript'";

console.log(input.replace(singleQuotes, '$1"'));

//Third Question Begins Here...
// Regular expression pattern to match JavaScript-style numbers

function numbers() {
  let userInputs = prompt("Enter a Number here");

  let numberPattern = /^[-+][0-9]*\.?[0-9]*([eE][-+]?[0-9]+)?$/;
  let num = numberPattern.test(userInputs);

  if (num !== true) {
    alert(false);
  } else {
    alert(true);
  }
}
