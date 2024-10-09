export default function createEmployeesObject(department, employees) {
  const ret = {
    [department]: employees,
  }
  return ret;
}
