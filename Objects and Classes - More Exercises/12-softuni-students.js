function manageSoftUniStudents(input) {
    let courses = {};

    input.forEach(line => {
        if (line.includes(':')) {
            let [courseName, capacity] = line.split(': ');
            capacity = parseInt(capacity);
            if (!courses[courseName]) {
                courses[courseName] = {
                    capacity: capacity,
                    students: []
                };
            } else {
                courses[courseName].capacity += capacity;
            }
        } else if (line.includes('joins')) {
            let [studentInfo, courseName] = line.split(' joins ');
            let [username, rest] = studentInfo.split('[');
            let [credits, email] = rest.split('] with email ');
            credits = parseInt(credits);

            if (courses[courseName] && courses[courseName].students.length < courses[courseName].capacity) {
                courses[courseName].students.push({ username, credits, email });
            }
        }
    });

    let coursesArray = Object.entries(courses).sort((a, b) => b[1].students.length - a[1].students.length);

    coursesArray.forEach(([courseName, course]) => {
        console.log(`${courseName}: ${course.capacity - course.students.length} places left`);
        course.students.sort((a, b) => b.credits - a.credits).forEach(student => {
            console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
        });
    });
}
