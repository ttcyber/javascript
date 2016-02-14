var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {
var minValue = array[startIndex];
    var minIndex = startIndex;
    var nextIndex;
	
    for(nextIndex = minIndex + 1; nextIndex <array.length ; nextIndex++){
		if (array[nextIndex] < minValue) {
			minValue = array[nextIndex];
			minIndex = nextIndex;
		}
	}
    return minIndex;
   
}; 

var selectionSort = function(array) {
    var i;
    var min = 0;
    var minVal= array[0];
    for (i = 0; i < array.length; i++) {
        min = indexOfMinimum(array, i);
        swap(array, i, min);
    }
        
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);
