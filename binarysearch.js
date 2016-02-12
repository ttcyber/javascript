//binary search will run with node
// save file as binarysearch.js
// to run type "node binarysearch.js"
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var i = 1;
    
while(min <= max) {
    guess = Math.floor((max + min) / 2);

    if (array[guess] === targetValue) {
		console.log("Total guesses " + i);
        return guess;

    }
    else if (array[guess] < targetValue) {
        min = guess + 1;
    }
    else {
        max = guess - 1;
    }
    i++;  // this is the same as i = i + 1;
	console.log("Guess " + guess);
}

	return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var thePrime = 73;
var result = doSearch(primes, thePrime);
 console.log("Found prime "+thePrime+" at index " + result);
