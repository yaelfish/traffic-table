export const calculateAverage = (array) => {
  return array.reduce((acc, val) => {
    return acc + (val.speed / array.length);
  }, 0);
}