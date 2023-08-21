import CourseTypes from '~/interfaces/api/CourseTypes'
import CategoryTypes from '~/interfaces/api/CategoryTypes'
import CategoriesServices from '~/services/CategoriesServices'
const categoriesServices = new CategoriesServices()

export const useCategoriesStore = defineStore('CategoriesStore', () => {
  // STATES
  const categories = ref(null as CategoryTypes[] | null)
  const courses = ref(null as CourseTypes[] | null)

  // GETTERS

  // Get categories state
  const getCategories = computed(() => {
    return categories?.value
  })

  // Get courses state
  const getCourses = computed(() => {
    return courses?.value
  })

  // ACTIONS

  // Get all Categories
  async function fetchCategories () {
    const response = await categoriesServices.getCategories()
    if (!response) {
      throw createError({
        statusCode: 400,
        message: 'Could not get Categories'
      })
    }
    categories.value = response
  }

  // Fetch all courses from category
  async function fetchCategoryCourses (categoryID: number) {
    const response = await categoriesServices.getCategoryCourses(categoryID)
    if (!response) {
      throw createError({
        statusCode: 400,
        message: 'Could not get Courses'
      })
    }
    courses.value = response
  }

  return {
    categories,
    courses,
    getCategories,
    getCourses,
    fetchCategories,
    fetchCategoryCourses
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategoriesStore, import.meta.hot))
}
