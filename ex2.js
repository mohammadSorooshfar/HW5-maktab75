let fileContent = "12,fatemeh\n" + "22,zahra\n" + "36,ali\n" + "45,reza\n";
function sentenceToObj(sentence) {
  let splitedSentence = fileContent.split("\n").toString().split(",");
  let obj = {};
  for (let i = 0; i < splitedSentence.length - 1; i += 2) {
    const element = splitedSentence[i];
    obj[element] = splitedSentence[i + 1];
  }
  return obj;
}
console.log(sentenceToObj(fileContent));
