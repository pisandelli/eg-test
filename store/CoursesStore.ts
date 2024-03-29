import Course from 'types/api/Course'
import CoursesServices from '~/services/CoursesServices'
const coursesServices = new CoursesServices()

export const useCoursesStore = defineStore('CoursesStore', () => {
  // STATES
  const courses = ref(null as Course[] | null)
  const course = ref(null as Course | null)
  const isLoading = ref(true)

  // GETTERS

  // Get all courses value
  const getCourses = computed(() => {
    return courses?.value
  })

  // Get the current course value
  const getCourse = computed(() => {
    return course?.value
  })

  // ACTIONS

  // Fetch all courses
  async function fetchAllCourses () {
    isLoading.value = true
    const response = await coursesServices.getCourses()
    if (!response) {
      isLoading.value = false
      throw createError({
        statusCode: 400,
        message: 'Could not fetch Courses'
      })
    }
    courses.value = response
    isLoading.value = false
  }

  // Get Course by Category Id
  async function fetchCourseById (courseId: number) {
    isLoading.value = true
    const response = await coursesServices.getCourseById(courseId)
    if (!response) {
      isLoading.value = false
      throw createError({
        statusCode: 400,
        message: 'Could not fetch Course'
      })
    }
    course.value = response
    isLoading.value = false
  }

  return {
    courses,
    course,
    isLoading,
    getCourses,
    getCourse,
    fetchAllCourses,
    fetchCourseById
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCoursesStore, import.meta.hot))
}
