const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var sayi1,sayi2,sonuc;

rl.question("ilk sayıyı giriniz : ", (s1) => {
    sayi1 = Number(s1);    
    if (isNaN(sayi1) || sayi1==null)
    {
        console.log(`Sayı girişi yapmadınız!!! `);
        rl.close();
    }
    else {        
        rl.question("İşlemi giriniz (+,-,*,/): ", (islem) => {
            if (!((islem=='+') || (islem=='-') || (islem=='*') || (islem=='/')))
            {
                console.log(`Geçerli işlem girişi yapmadınız! (+,-,*,/)`);
                rl.close();                
            }
            else
            {
                rl.question("ikinci sayıyı giriniz : ", (s2) => {
                    sayi2 = Number(s2);
                    if (isNaN(sayi2) || sayi2==null)
                    {
                        console.log(`Sayı girişi yapmadınız!!!`);
                        rl.close();                
                    }
                    else
                    {
                        switch (islem) {
                            case '+':
                              sonuc = sayi1+sayi2;
                              break;
                            case '-':
                              sonuc = sayi1-sayi2;
                              break;
                            case '*':
                              sonuc = sayi1*sayi2;
                              break;
                            case '/':
                              sonuc = sayi1/sayi2;
                              break;
                        }
                        console.log(`${sayi1} ${islem} ${sayi2} `+"="+` ${sonuc}`);
                        rl.close();
                    }
                });
            }
        });
    }    
});

