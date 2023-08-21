import { NavigationTypes } from '~/interfaces/NavigationTypes'
import GlobalServices from '~/services/GlobalServices'
const globalServices = new GlobalServices()

/**
 * Store to keep global information used by all application
 * such as navigation, etc.
 */
export const useGlobalStore = defineStore('GlobalStore', () => {
  // STATE
  const isLoading = ref(false)
  const navigation = ref(null as NavigationTypes[] | null)

  // GETTERS
  const getMainNavigation = computed(() => {
    return navigation?.value
  })

  // ACTIONS
  async function fetchMainNavigation () {
    isLoading.value = false
    const response = await globalServices.getMainNavigation()
    if (!response) {
      isLoading.value = false
      throw createError({
        statusCode: 500,
        message: 'Could not fetch Main navigation'
      })
    }
    navigation.value = response
    isLoading.value = true
  }
  return {
    isLoading,
    navigation,
    getMainNavigation,
    fetchMainNavigation
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}
