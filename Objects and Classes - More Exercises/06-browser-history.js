function browserHistory(browserObj, actions) {
    for (const action of actions) {
        const [command, site] = action.split(' ');

        if (command === "Open") {
            browserObj["Open Tabs"].push(site);
            browserObj["Browser Logs"].push(action);
        } else if (command === "Close") {
            const tabIndex = browserObj["Open Tabs"].indexOf(site);
            if (tabIndex !== -1) {
                browserObj["Open Tabs"].splice(tabIndex, 1);
                browserObj["Recently Closed"].push(site);
                browserObj["Browser Logs"].push(action);
            }
        } else if (action === "Clear History and Cache") {
            browserObj["Open Tabs"] = [];
            browserObj["Recently Closed"] = [];
            browserObj["Browser Logs"] = [];
        }
    }

    console.log(browserObj["Browser Name"]);
    console.log(`Open Tabs: ${browserObj["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${browserObj["Recently Closed"].join(', ')}`);
    console.log(`Browser Logs: ${browserObj["Browser Logs"].join(', ')}`);
}

