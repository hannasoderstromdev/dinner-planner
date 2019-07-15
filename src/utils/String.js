const WHITE_SPACES = [
  ' ',
  '\n',
  '\r',
  '\t',
  '\f',
  '\v',
  '\u00A0',
  '\u1680',
  '\u180E',
  '\u2000',
  '\u2001',
  '\u2002',
  '\u2003',
  '\u2004',
  '\u2005',
  '\u2006',
  '\u2007',
  '\u2008',
  '\u2009',
  '\u200A',
  '\u2028',
  '\u2029',
  '\u202F',
  '\u205F',
  '\u3000',
]

/**
 * @param {String} string
 * @param {String} chars - Chars to remove, fallback to space
 * @returns String without cars at start
 */
function lTrim(str, chars) {
  chars = chars || WHITE_SPACES

  const len = str.length
  const charLen = chars.length

  let start = 0
  let found = true
  let i
  let c

  while (found && start < len) {
    found = false
    i = -1
    c = str.charAt(start)

    while (++i < charLen) {
      if (c === chars[i]) {
        found = true
        start++
        break
      }
    }
  }

  return start >= len ? '' : str.substr(start, len)
}

/**
 * @param {String} string
 * @param {String} chars - Chars to remove, fallback to space
 * @returns String without chars at end
 */
function rTrim(str, chars) {
  chars = chars || WHITE_SPACES

  const charLen = chars.length

  let end = str.length - 1
  let found = true
  let i
  let c

  while (found && end >= 0) {
    found = false
    i = -1
    c = str.charAt(end)

    while (++i < charLen) {
      if (c === chars[i]) {
        found = true
        end--
        break
      }
    }
  }

  return end >= 0 ? str.substring(0, end + 1) : ''
}

/**
 * @param {String} string
 * @param {String} chars - Chars to remove, fallback to space
 * @returns String without chars at start and end
 */
function trimBoth(string, chars) {
  chars = chars || WHITE_SPACES
  return lTrim(rTrim(string, chars), chars)
}

/**
 * @param {String} string
 * @returns String without accents
 */
function removeAccents(string) {
  if (string.search(/[\xC0-\xFF]/g) > -1) {
    string = string
      .replace(/[\xC0-\xC5]/g, 'A')
      .replace(/[\xC6]/g, 'AE')
      .replace(/[\xC7]/g, 'C')
      .replace(/[\xC8-\xCB]/g, 'E')
      .replace(/[\xCC-\xCF]/g, 'I')
      .replace(/[\xD0]/g, 'D')
      .replace(/[\xD1]/g, 'N')
      .replace(/[\xD2-\xD6\xD8]/g, 'O')
      .replace(/[\xD9-\xDC]/g, 'U')
      .replace(/[\xDD]/g, 'Y')
      .replace(/[\xDE]/g, 'P')
      .replace(/[\xE0-\xE5]/g, 'a')
      .replace(/[\xE6]/g, 'ae')
      .replace(/[\xE7]/g, 'c')
      .replace(/[\xE8-\xEB]/g, 'e')
      .replace(/[\xEC-\xEF]/g, 'i')
      .replace(/[\xF1]/g, 'n')
      .replace(/[\xF2-\xF6\xF8]/g, 'o')
      .replace(/[\xF9-\xFC]/g, 'u')
      .replace(/[\xFE]/g, 'p')
      .replace(/[\xFD\xFF]/g, 'y')
  }

  return string
}

/**
 * @param {String} string
 * @returns String without non-word chars
 */
function removeNonWordChars(string) {
  return string.replace(/[^0-9a-zA-Z\xC0-\xFF -]/g, '')
}

function upperCase(string) {
  return string.toUpperCase()
}

function lowerCase(string) {
  return string.toLowerCase()
}

/**
 * @param {String} string
 * @returns String with dashes and spaces converted to camelCase
 */
function toCamelCase(string) {
  string = removeAccents(string)
  string = removeNonWordChars(string)
    .replace(/-/g, ' ') //convert all hyphens to spaces
    .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
    .replace(/\s+/g, '') //remove spaces
    .replace(/^[A-Z]/g, lowerCase) //convert first char to lowercase
  return string
}

/**
 * @param {String} string
 * @returns String in lowercase with spaces between words
 */
function unCamelCase(string) {
  string = string.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2')
  string = string.toLowerCase() //add space between camelCase text
  return string
}

/**
 * @param {String} string
 * @returns String with dashes in between words: this-is-a-slug
 */
function toSlug(string, delimeter) {
  if (delimeter === undefined) {
    delimeter = '-'
  }

  string = removeAccents(string)
  string = removeNonWordChars(string)
  string = trimBoth(string) //should come after removeNonWord
    .replace(/ +/g, delimeter) //replace spaces with delimeter
    .toLowerCase()

  return string
}

/**
 * @param {String} string
 * @returns String with dashes in between words: this-is-a-slug
 */
function camelCaseToHyphens(string) {
  string = unCamelCase(string)
  return toSlug(string, '-')
}

export default {
  lTrim,
  rTrim,
  trimBoth,
  removeAccents,
  removeNonWordChars,
  toCamelCase,
  unCamelCase,
  toSlug,
  camelCaseToHyphens,
}
