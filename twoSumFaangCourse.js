const array = [1, 3, 7, 5, 9, 2];
const target = 11;

const twoSum = (arr, tar) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const diff = map[arr[i]];
    if (diff >= 0) {
      return [diff, i];
    } else {
      const ntf = tar - arr[i];
      map[ntf] = i;
    }
  }
  return null;
};

console.log(twoSum(array, target));
