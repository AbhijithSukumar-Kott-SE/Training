function* myGenerator() {
    console.log("Start");
    yield "First Yield";  // Pause here and return this value
    console.log("After First Yield");
    yield "Second Yield"; // Pause again
    console.log("After Second Yield");
}

const gen = myGenerator(); // Creates generator instance

console.log(gen.next().value); // "Start", then "First Yield"
console.log(gen.next().value); // "After First Yield", then "Second Yield"
console.log(gen.next().value); // "After Second Yield", then undefined (end of function)
