function scheduleMeetings(input) {
    const meetings = {};

    input.forEach(entry => {
        const [day, name] = entry.split(' ');

        if (meetings[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    });

    for (const day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }
}

