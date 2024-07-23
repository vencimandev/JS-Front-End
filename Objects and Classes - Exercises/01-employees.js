function employees(employeeNames) {
    let employees = {};

    for (let name of employeeNames) {
        employees[name] = name.length;
    }

    for (let name in employees) {
        console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
    }
}

