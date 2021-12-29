// function binarySearch you can enter sorting elements to array and 
// add the key  

function binarysearch(array, key) {
  let min = 0;
  let max = array.length - 1;
  let mid = parseInt((min + max) / 2);
  while (min <= max) {
    if (key == array[mid]) {
      return "number index: " + mid;
    }
    if (key >= array[mid]) {
      min = mid + 1;
    }
    if (key <= array[mid]) {
      max = mid - 1;
    }
    mid = parseInt((min + max) / 2);
    if (min > max) {
      return "In the array don't have a this number";
    }
  }
}
//for example , sorting array.
let array = [1,2,3,4,5,6,7,8,9,10,11,15,16,18,20];
// key,value
let key = 7;



console.log(binarysearch(array,key));
