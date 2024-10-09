export default function createIteratorObject(report) {
  let arr = [];
  for (const key in Object.keys(report)) {
    arr.push(report.key);
  }
  console.log(arr);

  return arr;
}
