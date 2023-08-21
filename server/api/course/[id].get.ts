/**
 * Gets Course by ID
 * @params { string } id - Course Id
 * @returns { object } course - The course object
 */

// GET DATA
import { Courses } from '~/data/Courses'
import { Syllabus } from '~/data/Syllabus'
import { Classes } from '~/data/Classes'

// Get Types
import { ClassTypes } from 'interfaces/api/ClassTypes'

export default eventHandler((event) => {
  // Get Category Id from route
  const courseId = getRouterParam(event, 'id')

  // Create error if courseId is undefined
  if (!courseId) {
    throw createError({
      statusCode: 400,
      message: 'Category id is not defined'
    })
  }

  // Find the Course by id
  const course = Courses.find((course) => {
    return course.id === +courseId
  })

  // Filter all course's syllabus and attach classes
  const syllabus = Syllabus.filter(syll => syll.course_id === +courseId)
    .map((syll) => {
      syll.classes = _findClasses(syll.id)
      return syll
    })

  /**
   * Find all classes by syllabus id
   * @param { number } syllabusId - The Syllabus Id
   * @returns { Array } ClassType[] - All classes for the syllabus
   */
  function _findClasses (syllabusId: number): ClassTypes[] {
    return Classes.filter((theClass) => {
      return theClass.syllabus_id === syllabusId
    })
  }

  // If course is undefined, throw error
  if (!course) {
    throw createError({
      statusCode: 404,
      message: 'Cannot find course'
    })
  }

  // Attach syllabus to course
  course.syllabus = syllabus

  return course
})
