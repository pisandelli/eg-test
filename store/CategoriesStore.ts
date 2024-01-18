import Course from 'types/api/Course'
import Category from 'types/api/Category'
import CategoriesServices from '~/services/CategoriesServices'
const categoriesServices = new CategoriesServices()

export const useCategoriesStore = defineStore('CategoriesStore', () => {
  // STATES
  const categories = ref([] as Category[])
  const activeCategory = ref(null as number | null)
  const courses = ref(null as Course[] | null)
  const isLoading = ref(true)

  // GETTERS

  // Get categories state
  const getCategories = computed(() => {
    return categories?.value
  })

  // Get courses state
  const getCourses = computed(() => {
    return courses?.value
  })

  // Get the active category (default is the 1st)
  const getActiveCategory = computed(() => {
    return activeCategory?.value
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
    if (!activeCategory.value) { activeCategory.value = categories.value[0].id }
  }

  // Fetch all courses from category
  async function fetchCategoryCourses (categoryID: number) {
    // isLoading flag
    isLoading.value = true

    // Fetch courses by Id
    const response = await categoriesServices.getCategoryCourses(categoryID)

    // Create Error if no response
    if (!response) {
      isLoading.value = false
      throw createError('Could not get Courses')
    }

    // Set category courses
    courses.value = response

    // Turn off isLoading state
    isLoading.value = false
  }

  // Watch for activeCategory changes and fetch new data
  watch(activeCategory, async () => {
    if (!activeCategory.value) {
      throw createError('Could not get new Courses')
    }
    await fetchCategoryCourses(activeCategory.value)
  }, { immediate: false })

  return {
    categories,
    activeCategory,
    courses,
    isLoading,
    getCategories,
    getActiveCategory,
    getCourses,
    fetchCategories,
    fetchCategoryCourses
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategoriesStore, import.meta.hot))
}
