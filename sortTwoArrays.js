function twoArrays(k, A, B) {
    // Write your code here
    let index1 = A.sort((a, b) => a - b)
    let index2 = B.sort((a, b) => b - a)

    for (let i = 0; i < index1.length; i++) {
        if (index1[i] + index2[i]< k)
        return "NO"
      
    }
    return "YES"
}