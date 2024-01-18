import type Syllabus from '~/types/api/Syllabus'

export default interface Course {
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
  syllabus?: Syllabus[]
}
