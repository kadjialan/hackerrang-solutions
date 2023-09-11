function splitArray(s) {
  // Create an empty array to store the sub arrays.
  let string = s.toLowerCase().split("");
  let chunkSize = 3;
  const subArrays = [];
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  // Iterate over the array, splitting it into chunks of 3 elements.
  for (let i = 0; i < string.length; i += chunkSize) {
    // Create a new sub array with the current chunk of elements.
    const subArray = string.slice(i, i + chunkSize);
    // Push the sub array into the array of sub arrays.
    subArrays.push(subArray);
  }


  // Return the array of sub arrays.
  console.log(subArrays)
  return subArrays;
}

// Example
const subArrays = splitArray(
  "SOSOSOSOSDSDSKWOSDOSDOASDOASDFAFJDFDOSOSOWNSOSOSNDSKDDOSOSOSJDSDSOOSOSDSDOSASSOASDSAOSOSODSDSOASDWS"
);

