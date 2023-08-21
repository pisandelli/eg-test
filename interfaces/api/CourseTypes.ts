import { SyllabusTypes } from './SyllabusTypes'

export type CourseTypes = {
  id: number
  category_id: number
  name: string
  short_description: string
  author: string
  user_rate: string
  description: string
  reviews: string
  banner: string
  feature: boolean
  syllabus?: SyllabusTypes[]
}
