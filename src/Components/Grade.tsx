interface GradeProps {
  marks: number;
}

const Grade = ({ marks }: GradeProps) => {
  function getGrade(marks: number): string {
    let grade;
    if (marks < 50) {
      grade = "F"; //Fail
    } else if (marks >= 50 && marks < 75) {
      grade = "S"; //Satisfactory
    } else {
      grade = "G"; //Good
    }
    return grade;
  }
  console.log(getGrade(marks))
  return <div>{marks} → grade: {getGrade(marks)}</div>;
};

export default Grade;
