// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
var outerData = [10, 20, 97];
function addOuter(outer){
  var cnt = 0; // only accessible from within addOuter
  outer.forEach((val, item) => {
    cnt += val;
    
  })
  //console.log(cnt);
  return cnt;
}
console.log(addOuter(outerData));



/* STRETCH PROBLEMS, Do not attempt until you have completed 
all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = (interval) => {
  // Return a function that when invoked increments and 
  // returns a counter variable.
  
  var counter = 0;
  setInterval(timeIt, interval);
  function timeIt(){
    counter++;
  }
};


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
counter(500);

// ==== Challenge 3: Create a counter function with an object 
// that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
