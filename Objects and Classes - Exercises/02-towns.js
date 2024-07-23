function towns(data) {
    for (let row of data) {
        let [town, latitude, longitude] = row.split(' | ');
        let townObj = {
            town: town,
            latitude: parseFloat(latitude).toFixed(2),
            longitude: parseFloat(longitude).toFixed(2)
        };
        console.log(townObj);
    }
}

