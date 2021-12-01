const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
async function showNumbers() {

    for (let i = 0; i < 10; i++) { await delay(i, 1) };
    async function delay(i, time) {
        setTimeout(function () {
            console.log('printing with time sec delay', (i * time))
        }, i * time);
    }
}

showNumbers();