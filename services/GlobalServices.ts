export default class GlobalServices {
  // Get main navigation
  async getMainNavigation () {
    return await useCustomFetch('navigation')
  }
}
