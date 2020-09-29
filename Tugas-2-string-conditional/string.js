// Soal 1
var word = "JavaScript";
var second = "is";
var third = "awesome";
var fourth = "and";
var fifth = "I";
var sixth = "love";
var seventh = "it!";

var output =
  word +
  " " +
  second +
  " " +
  third +
  " " +
  fourth +
  " " +
  fifth +
  " " +
  sixth +
  " " +
  seventh;
console.log(output);

// Soal 2
var sentence = "I am going to be React Native Developer";

var exampleFirstWord = sentence[0];
var FirstWord = sentence[0];
var SecondWord = sentence[2] + sentence[3];
var ThirdWord =
  sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
var ForthWord = sentence[11] + sentence[12];
var FifthWord = sentence[14] + sentence[15];
var SixthWord =
  sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21];
var SeventhWord =
  sentence[23] +
  sentence[24] +
  sentence[25] +
  sentence[26] +
  sentence[27] +
  sentence[28];
var EighthWord =
  sentence[30] +
  sentence[31] +
  sentence[32] +
  sentence[33] +
  sentence[34] +
  sentence[35] +
  sentence[36] +
  sentence[37] +
  sentence[38];

console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + secondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);
console.log("Sixth Word: " + sixthWord);
console.log("Seventh Word: " + seventhWord);
console.log("Eighth Word: " + eighthWord);

// Soal 3
var sentence2 = "wow JavaScript is so cool";

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17);
var fourthWord2 = sentence2.substring(18, 20);
var fifthWord2 = sentence2.substring(21, 25);

console.log("First Word: " + exampleFirstWord2);
console.log("Second Word: " + secondWord2);
console.log("Third Word: " + thirdWord2);
console.log("Fourth Word: " + fourthWord2);
console.log("Fifth Word: " + fifthWord2);

// Soal 4
var sentence3 = "wow JavaScript is so cool";

var firstWord = sentence3.substring(0, 3);
var secondWord = sentence3.substring(4, 14);
var thirdWord = sentence3.substring(15, 17);
var fourthWord = sentence3.substring(18, 20);
var fifthWord = sentence3.substring(21, 25);

var firstWordLength = firstWord.length;
var secondWordLength = secondWord.length;
var thirdWordLength = thirdWord.length;
var fourthWordLength = fourthWord.length;
var fifthWordLength = fifthWord.length;

console.log("First Word: " + firstWord + ", with length: " + firstWordLength);
console.log(
  "Second Word: " + secondWord + ", with length: " + secondWordLength
);
console.log("Third Word: " + thirdWord + ", with length: " + thirdWordLength);
console.log(
  "Fourth Word: " + fourthWord + ", with length: " + fourthWordLength
);
console.log("Fifth Word: " + fifthWord + ", with length: " + fifthWordLength);
