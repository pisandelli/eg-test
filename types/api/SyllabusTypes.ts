import Class from './Class'

export default interface Syllabus {
  id: number
  course_id: number
  name: string
  classes?: Class[]
}
