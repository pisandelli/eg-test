/**
 * Gets All courses
 * @returns { Array } courses - A list of courses
 */

// GET DATA
import { Courses } from '~/data/Courses'
import { Categories } from '~/data/Categories'

// Get Types
import CourseTypes from 'interfaces/api/CourseTypes'

type superCourse = {
  id: number
  category_name: string
  courses: CourseTypes[]
}

export default eventHandler((event) => {
  const allCourses: superCourse[] = []

  Categories.forEach((category) => {
    // Get all courses from category
    const courses = Courses.filter((course) => {
      return course.category_id === category.id
    })

    // Attach courses to category
    allCourses.push({
      id: category.id,
      category_name: category.name,
      courses
    })
  })
  return allCourses
})
