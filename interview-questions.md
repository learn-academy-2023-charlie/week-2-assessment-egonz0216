# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

    Your answer: A parameter of a function is a variable that is included in the declaration of a funtion. It represents a value, and the actual value that gets passed into the function is what is known as an arguement.

    Researched answer: A parameter is defined in the function declaration, and it represents the value that will be passed in when we invoke the function. An arguement is the actual value that is passed into the function when it is called.


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

    Your answer: .map takes three parameters, which are value, index, and array - in that order. Only the first parameter (the value) is REQUIRED, but it may have all three, depending on the function requirements.  

    Researched answer: .map takes in 3 seperate parameters, and they are order specific. The first parameter is value, and it is the only one that is required for the .map built-in method. The second parameter is the index, which is an optional parameter, and the third parameter is the array, which is also optional. The value parameter represents the current value being processed, the index parameter represents the index of the value currently being processed, and the array parameter represents the original array that .map() was called upon

3. What is the difference between map and filter?

    Your answer: Both of these functions iterate through an array, but the .map() method returns an array with the same length as the original array, and the .filter() method only returns a subset of the original array that meets a specific condition.

    Researched answer: To add to everything stated above, in .map(), the callback function presented as a parameter should return a transformed value for each element in the original array. for .filter(), the callback function passed as a parqmeter should return a boolean value of true or false, which determines whether or not the specific element will be included in the new arrayl

4. What is iteration?

    Your answer: the process of repeating a set of instructions or operations multiple times until a specified condition is met
    
    Researched answer: iteration is when we want to execute code ONCE for each item in a collection, usually elements in an array or properties of an object. Unlike a loop, which is what i defined above. 

5. What is the difference between a function and a method?

    Your answer: a method is a built-in function that someone else took the trouble to create, so we can access them quickly without having to build them ourselves.  Examples of built-in functions are .toUpperCase, .slice(), .split() and so on and so on. Functions are custom built pieces of code that are built by the developer on a case by case basis, to perform whatever action is desired.

    Researched answer: Functions can execute a set of instructions on data or variables and return the result. They can be made to be dynamic. A key difference is that methods are strictly associated with objects, but functions do not have that limit. Functions can be their own standalone block of code, and can be invoked independently of an object or class. Methods are associated with objects of classes. They have access to and manipulate the date on the object to which they are bound.

6. STRETCH: What is hoisting in JavaScript?

    Your answer: i have no idea

    Researched answer:a behavior in which constant declarations and function declarations are moved to the top of the their respective scopes during the compilation phase, before the execution phase. this order is important because it allwos our code to be executed without errors even if we use the variables or functions in lines preceding the declaration of the constant of function. This is the behavior that we have been exploiting in the jest test problems we've tackled in class. We create a test that fails, and then a few lines down we create the function that will make the test pass. Even though js usually reads code from top to bottom, hoisting allows us to write the function below the function invocation, and it will still run wihtout syntax errors. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: functional components in React are essentially what functionas are to javascript. The name of components is in PascalCase. The component has a function declaration and a return. Within that return he have some JSX, and if we want to return more than one JSX element, then we wrap them in a React fragment.

2. Spread operator: a syntax feature that allows an iteration to be expanded or "spread" into individaul elements or properties. It is denoted with elipses in javascript (...)

3. React state: A special variable that sotres data that determines how the component renders and behaves. Components can either hold state or not hold state. If a component is holdig date in a state variable it is known as a logic component. If it does not hold state it is considered a display component.

4. React props: Short for react properties. Can be used to pass data from a parent component to a child component. They are essentially read-only inputs to a Reacto component that can be used to customizeits behavior or appearance

5. DOM events: Stands for Document Object Model. It is the visual representaiton of code, and can be something like the click of a button on a webpage
