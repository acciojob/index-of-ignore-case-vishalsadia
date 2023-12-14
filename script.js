function indexOfIgnoreCase(s1, s2) {
  // Check if either of the strings is empty
  if (s1.length === 0 || s2.length === 0) {
    return -1;
  }

  // Convert both strings to lowercase for case-insensitive comparison
  const lowerS1 = s1.toLowerCase();
  const lowerS2 = s2.toLowerCase();

  // Find the index of the lowercase s2 in the lowercase s1
  const index = lowerS1.indexOf(lowerS2);

  return index;
}

// Do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
