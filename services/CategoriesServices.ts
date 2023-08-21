export default class CategoriesServices {
  // Get all Categories
  async getCategories () {
    return await useCustomFetch('categories')
  }

  // Get all Courses from a category
  async getCategoryCourses (categoryId: number) {
    return await useCustomFetch(`category/${categoryId}/courses`)
  }
}
