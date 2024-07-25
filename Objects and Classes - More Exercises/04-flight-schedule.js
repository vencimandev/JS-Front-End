function flightSchedule(input) {
    const [allFlights, changedStatuses, statusToCheck] = input;

    let flights = {};

    allFlights.forEach(flight => {
        const [flightNumber, destination] = flight.split(' ');
        flights[flightNumber] = { Destination: destination, Status: 'Ready to fly' };
    });

    changedStatuses.forEach(status => {
        const [flightNumber, newStatus] = status.split(' ');
        if (flights[flightNumber]) {
            flights[flightNumber].Status = newStatus;
        }
    });

    for (const flightNumber in flights) {
        if (flights[flightNumber].Status === statusToCheck[0] ||
            (statusToCheck[0] === 'Ready to fly' && flights[flightNumber].Status === 'Ready to fly')) {
            console.log(flights[flightNumber]);
        }
    }
}
