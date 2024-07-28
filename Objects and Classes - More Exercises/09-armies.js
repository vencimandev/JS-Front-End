function manageArmies(input) {
    let leaders = {};

    input.forEach(line => {
        if (line.includes('arrives')) {
            let leader = line.split(' arrives')[0];
            if (!leaders[leader]) {
                leaders[leader] = { totalArmyCount: 0, armies: {} };
            }
        } else if (line.includes(':')) {
            let [leader, armyInfo] = line.split(': ');
            let [armyName, armyCount] = armyInfo.split(', ');
            armyCount = Number(armyCount);

            if (leaders[leader]) {
                if (!leaders[leader].armies[armyName]) {
                    leaders[leader].armies[armyName] = 0;
                }
                leaders[leader].armies[armyName] += armyCount;
                leaders[leader].totalArmyCount += armyCount;
            }
        } else if (line.includes('+')) {
            let [armyName, armyCount] = line.split(' + ');
            armyCount = Number(armyCount);

            for (let leader in leaders) {
                if (leaders[leader].armies[armyName]) {
                    leaders[leader].armies[armyName] += armyCount;
                    leaders[leader].totalArmyCount += armyCount;
                    break;
                }
            }
        } else if (line.includes('defeated')) {
            let leader = line.split(' defeated')[0];
            if (leaders[leader]) {
                delete leaders[leader];
            }
        }
    });

    let sortedLeaders = Object.keys(leaders).sort((a, b) => leaders[b].totalArmyCount - leaders[a].totalArmyCount);

    sortedLeaders.forEach(leader => {
        console.log(`${leader}: ${leaders[leader].totalArmyCount}`);
        let sortedArmies = Object.keys(leaders[leader].armies).sort((a, b) => leaders[leader].armies[b] - leaders[leader].armies[a]);
        sortedArmies.forEach(army => {
            console.log(`>>> ${army} - ${leaders[leader].armies[army]}`);
        });
    });
}
