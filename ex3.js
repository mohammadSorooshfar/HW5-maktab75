let namesAndDomainsObj = {};
let domains = [];
let names = [];
function getInput() {
  let input;
  while (input != "3") {
    input = prompt("enter a number:\n1)enter a domain\n2)enter a name\n3)end");
    if (input == "1") {
      domains.push(prompt("enter a domain"));
    } else if (input == "2") {
      names.push(prompt("enter a name"));
    }
  }
}
function makeObject() {
  getInput();
  names.forEach((value) => {
    let tempObj = {};
    for (let i = 0; i < domains.length; i++) {
      const item = domains[i];
      tempObj[item] = `${value}.${item}`;
    }
    namesAndDomainsObj[value] = tempObj;
  });
}
makeObject();
console.log(namesAndDomainsObj);
