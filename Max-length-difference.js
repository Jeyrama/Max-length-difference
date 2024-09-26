/*
You are given two arrays a1 and a2 of strings. 
Each string is composed with letters from a to z. 
Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y))).
If a1 and/or a2 are empty return -1.

Example:
  a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
  a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
  mxdiflg(a1, a2) --> 13

Note:
  input:  2 strings with substrings separated by ,
  output: number as a string
*/


// Solution

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1
  let l1 = a1.map(str => str.length)
  let l2 = a2.map(str => str.length)
  return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}

// or

function mxdiflg(a1, a2) {
  const minmax = (minmax, x) => [Math.min(minmax[0], x.length), Math.max(minmax[1], x.length)];
  if (a1.length == 0 || a2.length == 0) return -1;
  let minmax1 = a1.reduce(minmax, [Infinity, -1]);
  let minmax2 = a2.reduce(minmax, [Infinity, -1]);
  return Math.max(minmax1[1] - minmax2[0], minmax2[1] - minmax1[0]);
}