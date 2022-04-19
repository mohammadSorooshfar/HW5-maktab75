let mainObject = {};

function addToMainObj() {
  let input;
  let counter = 1;
  while (input != "cancel") {
    input = showQuestions();
    if (input != "cancel") {
      let index;
      if (counter < 10) {
        index = `0${counter}`;
      } else {
        index = counter;
      }
      mainObject[index] = input;
    }
    counter++;
  }
}
function showQuestions() {
  let input;
  let tempObject = { address: {} };
  let arrQuestions = [
    "name",
    "family",
    "father Name",
    "father job",
    "age",
    "grade",
    "city",
    "bolevared",
    "street",
    "alley",
    "block",
    "No",
    "floor",
  ];
  for (let i = 0; i < arrQuestions.length; i++) {
    const element = arrQuestions[i];
    input = prompt(`enter your ${element}`);
    if (input == "cancel") {
      return "cancel";
    } else {
      if (i > 5) {
        tempObject.address[element] = input;
      } else {
        tempObject[element] = input;
      }
    }
  }
  return tempObject;
}

addToMainObj();
console.log(mainObject);
