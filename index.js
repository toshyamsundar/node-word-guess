let Word = require("./word");
let inquirer = require("inquirer");
let chalk = require("chalk");

let randomWords = [
  "SAILBOAT",
  "POPSICLE",
  "BRAIN",
  "BIRTHDAY",
  "CAKE",
  "SKIRT",
  "KNEE",
  "PINEAPPLE",
  "TUSK",
  "SPRINKLER",
  "MONEY",
  "SPOOL",
  "LIGHTHOUSE",
  "DOORMAT",
  "FACE",
  "FLUTE",
  "RUG",
  "SNOWBALL",
  "PURSE",
  "OWL",
  "GATE",
  "SUITCASE",
  "STOMACH",
  "DOGHOUSE",
  "PAJAMAS",
  "PEACH",
  "NEWSPAPER",
  "WATERING",
  "CAN",
  "HOOK",
  "SCHOOL",
  "BEAVER",
  "BEEHIVE",
  "BEACH",
  "ARTIST",
  "FLAGPOLE",
  "CAMERA",
  "HAIR",
  "DRYER",
  "MUSHROOM",
  "PRETZEL",
  "QUILT",
  "CHALK",
  "DOLLAR",
  "SODA",
  "CHIN",
  "SWING",
  "GARDEN",
  "TICKET",
  "BOOT",
  "CELLO",
  "RAIN",
  "CLAM",
  "PELICAN",
  "STINGRAY",
  "FUR",
  "BLOWFISH",
  "RAINBOW",
  "HAPPY",
  "FIST",
  "BASE",
  "STORM",
  "MITTEN",
  "NAIL",
  "SHEEP",
  "STOPLIGHT",
  "COCONUT",
  "CRIB",
  "HIPPOPOTAMUS",
  "RING",
  "SEESAW",
  "PLATE",
  "FISHING",
  "POLE",
  "CHEEK",
  "VIDEO",
  "CAMERA",
  "TELEPHONE",
  "SILVERWARE",
  "BARN",
  "SNOWFLAKE",
  "FLASHLIGHT",
  "POPSICLE",
  "MUFFIN",
  "SUNFLOWER",
  "SWIMMING",
  "TUSK",
  "RADISH",
  "PEANUT",
  "SPOOL",
  "POODLE",
  "POTATO",
  "FACE",
  "SHARK",
  "SNOWBALL",
  "WAIST",
  "SPOON",
  "GATE",
  "BOTTLE",
  "MAIL",
  "SHEEP",
  "LOBSTER",
  "ICE",
  "CRIB",
  "BUBBLE",
  "SEESAW",
  "PENCIL",
  "CHEESEBURGER",
  "CHAIR",
  "CORNER",
  "CHEEK",
  "POPCORN",
  "TELEPHONE",
  "SEAHORSE",
  "SNOWFLAKE",
  "SPINE",
  "DESK"
];

let randomWord = "";
let guessCount = 8;
let guessedLetters = [];

let generateRandomWord = () => {
  index = Math.floor(Math.random() * randomWords.length);
  randomWord = new Word(randomWords[index]);
};

let guessLetter = () => {
  if (guessCount > 0) {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Guess a letter [a-z]: ",
          name: "guessedLetter"
        }
      ])
      .then(response => {
        console.log(`\n`);
        let currentLetter = response.guessedLetter.toUpperCase();
        let currentWord = "";
        if (!guessedLetters.includes(currentLetter)) {
          guessedLetters.push(currentLetter);
          let isCorrectLetter = randomWord.checkWordForLetter(currentLetter);

          if (!isCorrectLetter) {
            console.log(`\n ${chalk.bold.red("You got it WRONG!!")}`);
            guessCount--;
            console.log("\n" + chalk.bold.yellowBright(" You have " + guessCount + " guesses left..\n"));
          } else {
            console.log(`\n ${chalk.bold.green("You got it RIGHT!!")}`);
            console.log("\n" + chalk.bold.yellowBright(" You have " + guessCount + " guesses left..\n"));
          }

          currentWord = randomWord.getWord();
          console.log(`\n> ${currentWord} \n`);

          if (currentWord.includes("_")) {
            guessLetter();
          } else {
            console.log(`\n ${chalk.bold.green("YOU WIN!!!")} \n\n`);
            initializeGame();
          }
        } else {
          console.log(`\n ${chalk.bold.cyan("Don't repeat letters")} \n`);
          currentWord = randomWord.getWord();
          console.log(`\n> ${currentWord} \n`);
          guessLetter();
        }
      });
  } else {
    console.log(`\n ${chalk.bold.red("YOU LOSER!!!")} \n\n`);
    randomWord.showFullWord();
    let currentWord = randomWord.getWord();
    console.log(`> ${chalk.bold.blueBright(currentWord)} \n`);
    initializeGame();
  }
};

let initializeGame = () => {
  guessCount = 8;
  randomWord = "";
  guessedLetters = [];

  console.log("\n");
  inquirer
    .prompt([
      {
        type: "list",
        message: "Do you want to play?",
        choices: ["Yes", "No"],
        name: "startPlay"
      }
    ])
    .then(response => {
      if (response.startPlay === "Yes") {
        generateRandomWord();
        let currentWord = randomWord.getWord();
        console.log(`\n> ${currentWord} \n`);
        console.log("\n" + chalk.bold.yellowBright(" You have " + guessCount + " guesses left..\n"));
        guessLetter();
      }
    });
};

initializeGame();
