import { needleList } from './MOCK_DATA.js';

/*   const needleList = [
    { sku: 'e04b6074-332f-4661-8f3a-4cdcb3adfb6a', name: 'Product 4' },
    { sku: 'be77abf7-29b0-4ed1-9379-f5d7576cb5ce', name: 'Product 5' },
    { sku: '3c511860-d159-457d-8374-e8205904e6f5', name: 'Product 6' },
    { sku: '1e63459f-0b18-4acf-9afc-e7287347bbeb', name: 'Product 7' },
] */

function linearSearch(data, sku) {
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    let item = data[i];

    if (item.sku === sku) {
      //  console.log(item);
      //  console.log(item.sku);

      return i;
    }
  }

  return -1;
}

//Create a shallow copy of data to avoid changing the original array
const sortedData = [...needleList].sort((a, b) => {
  if (a.sku < b.sku) return -1;
  if (a.sku > b.sku) return 1;
  return 0;
});

function binarySearch(sortedData, sku) {
  /*   data.sort((a, b) => {
        if(a.sku < b.sku) return -1;
        if(a.sku > b.sku) return 1;
        return 0;
    });
 */
  // console.log(data);

  let length = sortedData.length;
  let low = 0;
  let high = length - 1;

  // console.log(length);
  // console.log(right);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midSku = sortedData[mid].sku;

    if (midSku === sku) {
      return sortedData[mid];
    } else if (midSku < sku) {
      //The middle element is less than sku
      //We ignore all the elements on the left (from low to mid)
      low = mid + 1;
    } else {
      //The middle element is greater than sku
      //We ignore all the elements on the right
      high = mid - 1;
    }
  }

  return -1;
}

//We test how much time it takes to perform the search of the whole array of elements

// Linear Search Testing
console.time('Linear Search Time');
for (const item of needleList) {
  linearSearch(needleList, item.sku);
}
console.timeEnd('Linear Search Time');

// Binary Search Testing
console.time('Binary Search Time');
for (const item of needleList) {
  binarySearch(sortedData, item.sku);
}
console.timeEnd('Binary Search Time');
