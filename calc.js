const readline = require("readline");
//const { isNumber } = require("util");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var sayi1,sayi2;

rl.question("ilk sayi giriniz : ", (s1) => {

    sayi1=parseInt(s1); 

    if (!isNumber(sayi1))
    {
        console.log(`Sayi girisi yapmadiniz!!! `);
        rl.close();
    }
    else{
        rl.question("ikinci sayi giriniz : ", (s2) => {
            console.log(`sayi1 : ${sayi1}, sayi2 : ${s2}`);
            rl.close();
        });
    }
});

/*
rl.question("What is your name? ", function(name) {
    rl.question("Where do you live? ", function(country) {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});
*/