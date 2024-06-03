export default function updateStudentGradeByCity(
  getListStudents,
  city,
  newGrades,
) {
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const obj = newGrades.find((item) => item.studentId === student.id);
      return { ...student, grade: obj ? obj.grade : 'N/A' };
    });
}
