function processStudentMarksData(allStudentsMarksData) {
    return allStudentsMarksData.map((studentData) => {
      const marks = [];
      for (let i = 1; i <= 5; i++) {
        if (studentData[`subject${i}`] && studentData[`marks${i}`]) {
          marks.push({
            subject: studentData[`subject${i}`],
            score: studentData[`marks${i}`],
          });
        }
      }
      return {
        name: studentData.name,
        marks,
      };
    });
  }
  
  const allStudentsMarksData = [
    {
      name: "Prateek",
      subject1: "Javascript",
      subject2: "HTML",
      subject3: "CSS",
      subject4: null,
      subject5: null,
      marks1: 90,
      marks2: 81,
      marks3: 80,
      marks4: null,
      marks5: null,
    },
    {
      name: "Nrupul",
      subject1: "Java",
      subject2: "Python",
      subject3: null,
      subject4: null,
      subject5: null,
      marks1: 95,
      marks2: 85,
      marks3: null,
      marks4: null,
      marks5: null,
    },
  ];
  
  const processedData = processStudentMarksData(allStudentsMarksData);
  console.log(processedData);