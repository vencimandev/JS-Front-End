function printDNAHelix(length) {
    const sequence = "ATCGTTAGGG";
    const patterns = [
        (a, b) => `**${a}${b}**`,
        (a, b) => `*${a}--${b}*`,
        (a, b) => `${a}----${b}`,
        (a, b) => `*${a}--${b}*`
    ];

    let seqIndex = 0;

    for (let i = 0; i < length; i++) {
        const pattern = patterns[i % patterns.length];
        const a = sequence[seqIndex % sequence.length];
        const b = sequence[(seqIndex + 1) % sequence.length];
        console.log(pattern(a, b));
        seqIndex += 2;
    }
}

