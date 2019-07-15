/**
 *  Collection of helper functions for managing Objects
 *
 *  If you want to use these functions inside a reducer,
 *  use deepCopy on your object before sending it into
 *  the helper function, to avoid mutating the original
 *  object.
 */

/**
 * @param {Object} obj - Can be an array of Objects
 * @returns New Array including child objects
 */
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * @param {Object} obj
 * @returns true if object is empty, otherwise false
 */
function isEmptyObject(obj) {
  if (obj === null) return true
  if (obj === undefined) return true

  return Object.keys(obj).length === 0
}

/**
 * @param {Object} obj
 * @param {Object} propToSearch
 * @param {Object} propToRemove
 * @returns object without the property
 */
function removeObjectChildProperty(obj, propToSearch, propToRemove) {
  if (obj === null) return true
  if (obj === undefined) return true

  const { [propToSearch]: parentValue, ...noChild } = obj
  const { [propToRemove]: removedValue, ...childWithout } = parentValue // eslint-disable-line
  return { ...noChild, [propToSearch]: childWithout }
}

export default {
  deepCopy,
  isEmptyObject,
  removeObjectChildProperty,
}
