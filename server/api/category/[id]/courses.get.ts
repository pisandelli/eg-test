/**
 * Gets Courses by Category ID
 * @params { string } id - Category Id
 * @returns { array } courses - Array of Courses
 */

// GET DATA
import { Courses } from '~/data/Courses'

export default eventHandler((event) => {
  // Get Category Id from route
  const categoryId = getRouterParam(event, 'id')

  // Create error if categoryId is undefined
  if (!categoryId) {
    throw createError({
      statusCode: 400,
      message: 'Category id is not defined'
    })
  }

  // Filter courses by category Id
  // eslint-disable-next-line array-callback-return
  const courses = Courses.filter((course) => {
    // Course Object with only necessary
    // info to fill the card
    if (course.category_id === +categoryId) {
      return {
        id: course.id,
        category_id: course.category_id,
        name: course.name,
        author: course.author,
        user_rate: course.user_rate,
        reviews: course.reviews,
        banner: course.banner,
        feature: course.feature
      }
    }
  })
  return courses
})
