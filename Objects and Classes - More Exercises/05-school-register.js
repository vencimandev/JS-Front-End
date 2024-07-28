function schoolRegister(input) {
    let register = {};

    input.forEach(record => {
        let [namePart, gradePart, scorePart] = record.split(', ');
        let name = namePart.split(': ')[1];
        let grade = Number(gradePart.split(': ')[1]);
        let score = Number(scorePart.split(': ')[1]);

        if (score >= 3) {
            let nextGrade = grade + 1;
            if (!register[nextGrade]) {
                register[nextGrade] = {
                    students: [],
                    scores: []
                };
            }
            register[nextGrade].students.push(name);
            register[nextGrade].scores.push(score);
        }
    });

    let sortedGrades = Object.keys(register).sort((a, b) => a - b);

    sortedGrades.forEach(grade => {
        let students = register[grade].students.join(', ');
        let averageScore = (register[grade].scores.reduce((a, b) => a + b, 0) / register[grade].scores.length).toFixed(2);
        console.log(`${grade} Grade`);
        console.log(`List of students: ${students}`);
        console.log(`Average annual score from last year: ${averageScore}`);
        console.log('');
    });
}
