import ClassTypes from './ClassTypes'

export default interface SyllabusTypes {
  id: number
  course_id: number
  name: string
  classes?: ClassTypes[]
}
