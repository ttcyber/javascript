var indexOfMinimum = function(array, startIndex) { 
    var minValue = array[startIndex];// set minValue to first element of the array
    var minIndex = startIndex; //aasign startIndex to minIndex
	var nextIndex;
	
    for(nextIndex = minIndex + 1; nextIndex <array.length ; nextIndex++){
		if (array[nextIndex] < minValue) {
			minValue = array[nextIndex];
			minIndex = nextIndex;
		}
	}
    return minIndex;
}; 

var array = [18, 6, 66, 44, 9, 2, 14];   
var index = indexOfMinimum(array, 0);// 0 is the starting point

 console.log("The index of the minimum value of the array is " + index + " ."  );
