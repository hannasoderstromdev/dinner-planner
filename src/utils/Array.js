/**
 *  Collection of helper functions for managing Arrays
 *
 *  If you want to use these functions inside a reducer,
 *  use deepCopy on your array before sending it into
 *  the helper function, to avoid mutating the original
 *  array.
 */

/**
 * @param {Array} arr - Can be an array of Objects
 * @returns New Array including child objects
 */

function deepCopy(arr) {
  return JSON.parse(JSON.stringify(arr))
}

/**
 * @param {Array} arr
 * @param {String} key
 * @returns Array with Objects sorted by key
 *
 * Time Complexity: O(n*2)
 * Space Complexity: O(1)
 * https://en.wikipedia.org/wiki/Insertion_sort
 *
 * Only use for small arrays!
 */

function insertionSort(arr, key) {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i]
    for (var j = i - 1; j >= 0 && arr[j][key] > current[key]; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = current
  }
  return arr
}

/**
 *  @param {Array} arr
 *  @param {Number} size
 *  @returns Array of array-chunks with given size
 */

function chunk(arr, size) {
  const chunks = []

  for (let i = 0, l = arr.length; i < l; i += size) {
    chunks.push(arr.slice(i, i + size))
  }

  return chunks
}

/**
 *  @param {Array} arr
 *  @param {String} key
 *  @returns Object with Arrays of Objects grouped by key
 */

function groupBy(arr, key) {
  return arr.reduce(function(storage, item) {
    const group = item[key]

    storage[group] = storage[group] || []

    storage[group].push(item)

    return storage
  }, {})
}

/**
 * @param {Array} arr
 * @param {Object} object
 * @returns index of found object or -1
 */
function arrayContainsObject(arr, object) {
  let i = 0
  for (const obj of arr) {
    if (JSON.stringify(obj) === JSON.stringify(object)) {
      return i
    }
    i++
  }
  return -1
}

/**
 * @param {Array} arr
 * @param {Object} object
 * @param {String} key
 * @returns index of found object or -1
 */
function arrayContainsObjectKey(arr, object, key) {
  let i = 0
  for (const obj of arr) {
    if (JSON.stringify(obj[key]) === JSON.stringify(object[key])) {
      return i
    }
    i++
  }
  return -1
}

/**
 * @param {Array} arr
 * @param {Number} index
 * @param {Object} item
 * @returns Array with item at index
 */
function insertAtIndex(arr, index, item) {
  arr.splice(index, 0, item)
  return arr
}

/**
 * @param {Array} arr
 * @param {Number} index
 * @param {Object} item
 * @returns Array with item after index
 */
function insertAfterIndex(arr, index, item) {
  if (index > 0) {
    arr.splice(index + 1, 0, item)
  } else {
    arr.push(item)
  }
  return arr
}

/**
 * @param {Array} arr
 * @param {Number} index
 * @param {Array} items - Array of Objects
 * @returns Array with items after index
 */
function insertManyAfterIndex(arr, index, items) {
  if (index > 0) {
    arr.splice(index + 1, 0, ...items)
  } else {
    arr.push(items)
  }
  return arr
}

/**
 * @param {Array} arr
 * @param {Number} oldIndex
 * @param {Number} newIndex
 * @returns Array with item at new index
 */
function reorderArray(arr, oldIndex, newIndex) {
  const item = arr[oldIndex]
  arr.splice(oldIndex, 1)
  arr.splice(newIndex, 0, item)
  return arr
}

export default {
  deepCopy,
  insertionSort,
  chunk,
  groupBy,
  arrayContainsObject,
  arrayContainsObjectKey,
  insertAtIndex,
  insertAfterIndex,
  insertManyAfterIndex,
  reorderArray,
}
