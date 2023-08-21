import { ClassTypes } from './ClassTypes'

export type SyllabusTypes = {
  id: number
  course_id: number
  name: string
  classes?: ClassTypes[]
}
