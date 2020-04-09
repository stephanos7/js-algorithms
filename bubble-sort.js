const bbs4 = (arr) => {
  let swapCounter = 273;

  while(swapCounter !== 0){
  
  swapCounter = 0;
  for(let i = 0; i < (arr.length-1); i++){

    if(arr[i] > arr[i+1]){
      
      console.log("index is ",i, " element ", arr[i], "is larger than the next", arr[i+1]);
      
      let leftValue = arr[i];
      let rightValue = arr[i+1];

      console.log(leftValue, rightValue);

      arr[i] = rightValue ;
      arr[i+1] = leftValue;
      
      swapCounter++
    }
    console.log(arr);


  }
  console.log(arr);
  console.log(swapCounter);
  }
  return arr;
}
