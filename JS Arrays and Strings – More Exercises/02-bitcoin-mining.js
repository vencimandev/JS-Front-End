function bitcoinMining(shifts) {
    const bitcoinPrice = 11949.16;
    const goldPricePerGram = 67.51;
    let totalMoney = 0;
    let bitcoinsBought = 0;
    let firstBitcoinDay = 0;

    for (let day = 1; day <= shifts.length; day++) {
        let goldMined = shifts[day - 1];
        if (day % 3 === 0) {
            goldMined *= 0.7; // 30% откраднато
        }
        totalMoney += goldMined * goldPricePerGram;

        while (totalMoney >= bitcoinPrice) {
            if (bitcoinsBought === 0) {
                firstBitcoinDay = day;
            }
            totalMoney -= bitcoinPrice;
            bitcoinsBought++;
        }
    }

    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (bitcoinsBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

