function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        let product = num * i;
        console.log(`${num} x ${i} = ${product}`);
    }
}
showMultiplicationTable(7)

function randomOddOrEven() {
    let randomNumber = 0;
    for (let i = 0; i < 10; i++) {
        randomNumber = Math.floor(Math.random() * 180) + 20;
        if (randomNumber % 2 === 0) {
            console.log(`${randomNumber} is even`);
        } else {
            console.log(`${randomNumber} is odd`);
        }
    }
}
randomOddOrEven();

for (let i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}

for (let i = 100; i >= 5; i-=5) {
    console.log(i);
}