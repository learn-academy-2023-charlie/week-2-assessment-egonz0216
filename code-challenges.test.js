// ASSESSMENT 2: Coding Practical Questions with Jest

const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:
    // Input: an array
    // Output: an array, will all of the numbers multiplied by three
    // Method: use the .map() built-in method to iterate a multiplaction throughtout the entire array and return an array

// a) Create a test with expect statements for each of the variables provided.

    describe("mult3", () => {
        it("Takes in an array of values and multiplies each of them by 3", () => {
            const numbersArray1 = [6, 7, 8, 9, 10]
            const numbersArray2 = [24, 27, 30, 33, 36]
             expect(mult3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
             expect(mult3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
        }) 
    })

    // FAIL  ./code-challenges.test.js
    // mult3
    // ✕ Takes in an array of values and multiplies each of them by 3 (2 ms)

    // ● mult3 › Takes in an array of values and multiplies each of them by 3

    // ReferenceError: mult3 is not defined



const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.
const mult3 = (arr) => {
    return arr.map((num) => {
        return num *3
    })
}

    // PASS  ./code-challenges.test.js
    // mult3
    //   ✓ Takes in an array of values and multiplies each of them by 3 (3 ms)


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo code:
    // Input: Three separate objects, each with a number as a value
    // output: True or false, depending on if the number can be divisible by three
    // Process: use a conditional statement to check if the number can be divided by three, and use string interpolation to make a dynamic code that can check for multiple objects

// a) Create a test with expect statements for each of the variables provided.

    const object1 = { number: 15 }
    // Expected output: "15 is divisible by three"
    const object2 = { number: 0 }
    // Expected output: "0 is divisible by three"
    const object3 = { number: -7 }
    // Expected output: "-7 is not divisible by three"

// describe("divisibleByThree", () => {
//     it("checks if the value in the object is divisible by 3", () =>{
//         const object1 = { number: 15 }
//         const object2 = { number: 0 }
//         const object3 = { number: -7 }    
//         expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
//         expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
//         expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
//     })
// })

    // FAIL  ./code-challenges.test.js
    // divisibleThree
    // ✕ checks if the value in the object is divisible by 3 (1 ms)
    // ● divisibleThree › checks if the value in the object is divisible by 3
    //   ReferenceError: divisibleThree is not defined


// b) Create the function that makes the test pass.

    const divisibleByThree = (obj) => {
        if(obj.number % 3 === 0){
            return `${obj.number} is divisible by three`
        } else {
            return `${obj.number} is not divisible by three`
        }
    }

    describe("divisibleByThree", () => {
        it("checks if the value in the object is divisible by 3", () =>{
            const object1 = { number: 15 }
            const object2 = { number: 0 }
            const object3 = { number: -7 }    
            expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
            expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
            expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
        })
    })

    //     PASS  ./code-challenges.test.js
    //     mult3
    //       ✓ Takes in an array of values and multiplies each of them by 3 (2 ms)
    //     divisibleByThree
    //       ✓ checks if the value in the object is divisible by 3
    //     Test Suites: 1 passed, 1 total
    //     Tests:       2 passed, 2 total

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code:
    // input: an array of strings
    // output: an array of strings of the same length, with all of the words capitalized
    // process: create function arrayCap, that will use the .map() built-in method to iterate through the array, along with the .toUpperCase() function, to make the letters capital.
        // Edit: after some research on why my function wouldn't work, I came accross the .charAt() built in method, which would allow me to extract the character at the given value, which would be position (0) as the first letter in the word. I could then perform the .toUpperCase function on that single character to make it capitalized, and would then need to concatenate that first capitalized character with the rest of the word, which can be extracted from the original string with the .slice() method, with the starting position at (1)

// a) Create a test with expect statements for each of the variables provided.

    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]


    describe("arrayCap", () =>{
        it("Capitalizes the first letter in every string within the array", () => {
            const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
            const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
            
            expect(arrayCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
            expect(arrayCap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
        })
    })

    // FAIL  ./code-challenges.test.js
    // mult3
    //   ✓ Takes in an array of values and multiplies each of them by 3 (2 ms)
    // divisibleThree
    //   ✓ checks if the value in the object is divisible by 3 (1 ms)
    // arrayCap
    //   ✕ Capitalizes the first letter in every string within the array
    // ● arrayCap › Capitalizes the first letter in every string within the array
    //   ReferenceError: arrayCap is not defined


// b) Create the function that makes the test pass.

  
  const arrayCap = (arr) => {
    return arr.map((string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    })
  }

    //   PASS  ./code-challenges.test.js
    //   mult3
    //     ✓ Takes in an array of values and multiplies each of them by 3 (5 ms)
    //   divisibleByThree
    //     ✓ checks if the value in the object is divisible by 3 (1 ms)
    //   arrayCap
    //     ✓ Capitalizes the first letter in every string within the array (1 ms)
    //   Test Suites: 1 passed, 1 total
    //   Tests:       3 passed, 3 total



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code:
    // Input: a single string
    // Output: a single number - the index value of the first vowel
    // Process: define the values of the vowels for the functin to match against, and then use a for loop to check if the letters in the given strings are strictly equal to the vowels I specify.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("firstVowel", () => {
    it("will check if the characters in the string are vowels", () => {
        const vowelTester1 = "learn"
        const vowelTester2 = "academy"
        const vowelTester3 = "challenges"
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)
    })
})


    // FAIL  ./code-challenges.test.js
    // mult3
    //   ✓ Takes in an array of values and multiplies each of them by 3 (2 ms)
    // divisibleByThree
    //   ✓ checks if the value in the object is divisible by 3 (1 ms)
    // arrayCap
    //   ✓ Capitalizes the first letter in every string within the array (1 ms)
    // firstVowel
    //   ✕ will check if the characters in the string are vowels
    // ● isItAVowel › will check if the characters in the string are vowels
    // ReferenceError: firstVowel is not defined

// b) Create the function that makes the test pass.
    const firstVowel = (string) => {
        const vowels = ["a", "e", "i", "o", "u"]
        for (let i = 0; i < string.length; i++) {
            if(vowels.includes(string[i])){
                return i
            }
        }
    }

    // PASS  ./code-challenges.test.js
    // mult3
    //   ✓ Takes in an array of values and multiplies each of them by 3 (3 ms)
    // divisibleByThree
    //   ✓ checks if the value in the object is divisible by 3 (1 ms)
    // arrayCap
    //   ✓ Capitalizes the first letter in every string within the array (1 ms)
    // firstVowel
    //   ✓ will check if the characters in the string are vowels (1 ms)
    // Test Suites: 1 passed, 1 total
    //   Tests:       4 passed, 4 total