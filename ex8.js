let stateCitiesObj = {};
function addState(state) {
  let temp = {};
  temp[state] = [];
  stateCitiesObj = {
    ...stateCitiesObj,
    ...temp,
  };
}
function addCity(state, city) {
  let arr = [city];
  stateCitiesObj[state] = [...stateCitiesObj[state], ...arr];
}
function addCities(state, ...city) {
  stateCitiesObj[state] = [...stateCitiesObj[state], ...city];
}
addState("oklahama");
addCity("oklahama", "tehran");
addCities("oklahama", "shomal", "junub", "shargh");
console.log(stateCitiesObj);
