/**
 * Transforma a string into a Slug
 *
 * @param {string | number} args - The Path to data
 * @returns { string }
 * @version 1.0.0
 *
 */

export function useSlugify (...args: (string | number)[]): string {
  const value = args.join(' ')

  return value
    .normalize('NFD') // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036F]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, '-') // separator
}
