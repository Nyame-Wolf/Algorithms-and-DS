function filter_list(l) {
  /*
  takes a list of non-negative integers and
 strings and returns a new list with the strings filtered out
  */
  return l.filter((i) => Number.isInteger(i));
}

// soln2
// function filter_list(l) {
//     return l.filter(v => typeof v == "number")
//    }
