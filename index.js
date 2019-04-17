let Word = require("./word");
let inquirer = require("inquirer");

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
let guessCount = 5;

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
        let isCorrectLetter = randomWord.checkWordForLetter(response.guessedLetter.toUpperCase());

        if (!isCorrectLetter) {
          guessCount--;
          console.log("You are wrong!!");
        } else {
          console.log("You are correct!!");
        }

        let currentWord = randomWord.getWord();
        console.log(`\n> ${currentWord} \n`);

        if (currentWord.includes("_")) {
          guessLetter();
        } else {
          console.log(`\n YOU WIN!!! \n\n`);
          initializeGame();
        }
      });
  }
};

let initializeGame = () => {
  guessCount = 5;
  randomWord = "";

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
        guessLetter();
      }
    });
};

initializeGame();
