export default class CategoriesServices {
  // Get all Categories
  async getCategories () {
    const config = useRuntimeConfig()
    return await useFetch(`${config.public.API_BASE}/categories`)
  }

  // Get all Courses from a category
  async getCategoryCourses (categoryId: number) {
    const config = useRuntimeConfig()
    return await useFetch(`${config.public.API_BASE}/category/${categoryId}/courses`)
  }
}
