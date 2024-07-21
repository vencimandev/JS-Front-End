function loadingBar(percent) {
    let progress = percent / 10;
    let bar = '[' + '%'.repeat(progress) + '.'.repeat(10 - progress) + ']';

    if (percent === 100) {
        console.log('100% Complete!');
        console.log(bar);
    } else {
        console.log(`${percent}% ${bar}`);
        console.log('Still loading...');
    }
}

