function splitArray(array) {
    // Create an empty array to store the sub arrays.
    let chunkSize = 3
    const subArrays = [];
  
    // Iterate over the array, splitting it into chunks of 3 elements.
    for (let i = 0; i < array.length; i += chunkSize) {
      // Create a new sub array with the current chunk of elements.
      const subArray = array.slice(i, i + chunkSize);
  
      // Push the sub array into the array of sub arrays.
      subArrays.push(subArray);
    }
  
    // Return the array of sub arrays.
    console.log(subArrays)
    return subArrays;
  }
  
  // Example
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const subArrays = splitArray(array);






/* function marsExploration(s) {
    // Write your code here
    let string = s.toLowerCase().split('')
    console.log(string)
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== 's' && string[i]!== 'o') {
            count++
             console.log(count)
        }
       
        
    }
    

     console.log(count) 

}

marsExploration('SOSOSOSOSDSDSKWOSDOSDOASDOASDFAFJDFDOSOSOWNSOSOSNDSKDDOSOSOSJDSDSOOSOSDSDOSASSOASDSAOSOSODSDSOASDWS') */
