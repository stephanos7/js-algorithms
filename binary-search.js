const sortedArray = [1,3,5,5,7,8,11,12,14,14,15,16,16,17,17,17,17,18,19,19,19];

const bs = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let tries = 1;

while(start <= end){
  console.log("TRY NUMBER ", tries);

    let middle = Math.floor((start + end)/ 2);

        console.log("end is ", end)
        console.log("start is ", start)
        console.log(`looking now at position ${middle} where the value is ${arr[middle]}`)
        console.log("\n")

      if(arr[middle] === target){
        console.log("found the target at this location!! : ");
        return true;
      }
      else if(arr[middle] > target){
        console.log("target is smaller than the midpoint so next look to the left half of the array" )
        end = middle-1
      }
      else{
        console.log("target is bigger than the midpoint so next look to the right half of the array" );
        start = middle+1;
    }
            tries ++;
  }
  return false

}

