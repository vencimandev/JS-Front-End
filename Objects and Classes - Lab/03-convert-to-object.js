function convertToObject(jsonString) {
    // Parse the JSON string to an object
    const obj = JSON.parse(jsonString);
    
    // Loop through the object properties and print them
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

