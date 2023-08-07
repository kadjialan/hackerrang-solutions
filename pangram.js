function pangrams(s) {
  let sentence = s.replace(/ /g,'').toLowerCase();
  let array = sentence.split('')
  console.log(array)
  const set = new Set(array)
  if (set.size === 26) {
    console.log('pangrams')
  }else {
    console.log("not pangrams")
  }
}

pangrams("We promptly judged antique ivory buckles for the next prize");
