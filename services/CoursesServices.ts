export default class CoursesServices {
  // Get all courses
  async getCourses () {
    return await useCustomFetch('courses')
  }

  // Get course by ID
  async getCourseById (courseId: number) {
    return await useCustomFetch(`course/${courseId}`)
  }
}
