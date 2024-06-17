// Making an array:
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"
colors[0][0]; // 'r'

colors[10]="lol"; // will contain 7 empty places after yellow and length of array will be 11 now

// They have a length:
colors.length; //3

// Important array methods:

//push(value) - adds value to the END of an array (similar to stacks in C/C++)
// you can push MULTIPLE values as well
//pop() - removes and returns last value in array (similar to stacks in C/C++)


//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array

// array1.concat(array2); will not update any existing array
// array1.includes(val); will return boolean value
// array1.indexOf(val); will return -1 if not found
// array1.reverse(); will actually modify the original array


// SLICE (is not a destructive method ie will not modify original):

// array1.slice(); will just create a copy of the array
// array1.slice(2,5); will not include 5 but will include 2
// array1.slice(2); will start from 2 and include all till end


// SPLICE (it is a destructive method):

// array1(<start>[,<no. of items to delete>, <new value to insert>])
let colors=['red','orange','yellow','green','blue','violet'];
colors.splice(1,0,'red-orange'); // will start at index 1 deleting 0 items and insert red-orange at 1
colors.splice(4,0,'hello','lol'); // starting with index 4 will insert hello and then lol
colors.splice(5,3); // will delete 3 values starting from index 5


// SORT (it is a destructive method):

// array1.sort(); by default it will convert all values into strings and compare using UTF-16 encoding
// and sort in ascending order of that