/**
 * Gets main navigation
 * @returns { Array } MainNavigation - A list of navigation links
 */

// GET DATA
import { MainNavigation } from '~/data/MainNavigation'

// Return the main navigation's list
export default eventHandler((event) => {
  return MainNavigation
})
