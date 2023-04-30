// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Charlie 2023"
// console.log(cohort.split(""))

// a) Your answer:"C", "h", "a","r", "l", "i" "e"," ", "2", "0", "2", "3"
// b) Verify and explain: the split() built in method with the empty quotation marks splits teh string into individual characters

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: the function does not include a return statement, so it does not know which value to return when invoking it

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: this is the shorthand notation of the function, so it does not require a return statement. It uses .map to iterate the multiplication across the array, and returns an array of the same length, with all of the values * 2

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: I looked up that `!==` is the strict inequality operator, which essentially filters out any number in the array that would be divisible by two aka an even number. Then the .filter method returns a shorter array with only those values that are not even

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "javascript"
// b) Verify and explain: myCodingSkills specifies the object that we're looking at, the .languages refers to the speficic key:value pair we're interested in, and the [0] is the indexed position that we want the console log to return. Javascript is in the zero index position, so that is what is returned.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Charlie"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Learn {student: "George", cohort: "Charlie", year: 2023}
// b) Verify and explain: Classes are blueprints for creating objects. when we console.log(learnStudent), we pass in the only perameter given by the const declaration into the class constructor. With that information, the student = name key value pair is the only dynamic part of the function. The cohort and the year are both hardcoded into the class, and will therefore return every time.
