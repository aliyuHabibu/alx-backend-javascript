export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];
  let i = 0;
  for (const idx of array) {
    newArray[i] = appendString + idx;
    i += 1;
  }

  return array;
}
