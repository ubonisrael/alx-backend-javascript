export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((acc, student) => student.id + acc, 0);
}
