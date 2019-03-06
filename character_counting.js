
function countCharacters(phrase) {
  var noSpaces = phrase.split(" ").join("");
  var lettersCount = {}
  for (i = 0; i < noSpaces.length; i++) {
    var letter = noSpaces[i];
    //console.log("letter", i, " is ", letter);
    if (lettersCount[letter] === undefined) {
        lettersCount[letter] = 1;
    } else {
      lettersCount[letter] += 1; // lettersCount[letter] = lettersCount[letter] + 1
    }
    //console.log("lettersCount is now", lettersCount);
  }
  return lettersCount;
}

console.log(countCharacters("lighthouse in the house"));