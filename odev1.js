/*Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır. */

const yaricap = process.argv.slice(2)*1;


function daire(yaricap){
    let r=yaricap;
    let pi=(3.14);
    let alan= pi*(r*r);
   

    console.log(`yaricapi ${yaricap} olan dairenin alani: ${alan}`);
}

daire(yaricap);
