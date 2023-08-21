/**
 * Gets All categories
 * @returns { Array } categories - A list of categories
 */

// GET DATA
import { Categories } from '~/data/Categories'

// Return the categories' list
export default eventHandler((event) => {
  return Categories
})
