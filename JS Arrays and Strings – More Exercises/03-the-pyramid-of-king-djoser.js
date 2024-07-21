function pyramidOfKingDjoser(base, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let steps = 0;

    while (base > 2) {
        steps++;
        let outerLayer = base * base;
        let innerLayer = (base - 2) * (base - 2);
        let stoneRequired = innerLayer * increment;
        totalStone += stoneRequired;

        if (steps % 5 === 0) {
            let lapisRequired = (outerLayer - innerLayer) * increment;
            totalLapis += lapisRequired;
        } else {
            let marbleRequired = (outerLayer - innerLayer) * increment;
            totalMarble += marbleRequired;
        }

        base -= 2;
    }

    steps++;
    let goldRequired = base * base * increment;
    totalGold += goldRequired;

    let height = Math.floor(steps * increment);

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${height}`);
}

