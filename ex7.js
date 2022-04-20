let obj = {
  id: {
    name: "ali",
    grades: {
      mathmatics: 18,
      physics: 19,
      english: 15,
    },
  },
};
function clone() {
  let cloneObj = {};
  for (let key of Object.keys(obj)) {
    const element = obj[key];
    if (typeof element == "object") {
      let tempObj = {};
      for (let key1 of Object.keys(element)) {
        const element2 = element[key1];
        if (typeof element2 == "object") {
          let tempObj2 = {};
          for (let key2 of Object.keys(element2)) {
            tempObj2[key2] = element2[key2];
          }
          tempObj[key1] = tempObj2;
        } else {
          tempObj[key1] = element[key1];
        }
      }
      cloneObj[key] = tempObj;
    }
  }
  cloneObj.id.grades.mathmatics = 9;
  console.log(cloneObj);
  console.log(obj);
}
clone();
