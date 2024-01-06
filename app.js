/*let qiymat = "assalmu alaykum";

function teskari(teskariQiymat) {
  return teskariQiymat.split("").reverse().join("");
}

console.log(teskari(qiymat));*/

/*function uzunSoz(satr) {
  let sozlar = satr.split(" ");

  let engUzun = "";
  for (const soz of sozlar) {
    if (soz.length > engUzun.length) {
      engUzun = soz;
    }
  }

  return engUzun;
}

let natija = "salom dunyo assalomu alaykum";
console.log(uzunSoz(natija));*/

/*let soz = "assalomu alaykum";

function unlilari(Satr) {
  let unliHarflari = /[aeiouAEIOU]/g;

  let unliHarflar = Satr.match(unliHarflari);

  return unliHarflar || [];
}

console.log(unlilari(soz));*/

/*function isPalindrom(soz) {
  let newSoz = soz.toLowerCase().replace();

  return newSoz === newSoz.split("").reverse().join("");
}
let natija = "arra";

console.log(isPalindrom(natija));*/

/*function siqish(satr) {
  let sozlar = " ";
  let counter = " ";
  let soz = 0;

  for (let i = 0; i < satr.length; i++) {
    if (satr[i] !== counter) {
      if (soz > 0) {
        sozlar += counter + soz;
      }

      counter = satr[i];

      soz = 1;
    } else {
      soz++;
    }
  }

  if (soz > 0) {
    sozlar += counter + soz;
  }

  return sozlar;
}

const testSoz = "aaabbbccdddd88111118888iiiiggg";
const natija = siqish(testSoz);
console.log(natija);*/

/*function olibTashla(son) {
  let counter = new Set(son);
  let qiymat = Array.from(counter);

  return qiymat;
}
let malumot = [1, 2, 2, 3, 4, 4, 5];
let natija = olibTashla(malumot);

console.log("kiritilgan natija:", malumot);
console.log("javob natija:", natija);*/

/*function boshHarf(satr) {
  let sozlar = satr.split(" ");

  const boshHarflar = sozlar.map(
    (soz) => soz.charAt(0).toUpperCase() + soz.slice(1)
  );

  return boshHarflar.join(" ");
}

let natija = "assalomu alaykum dostlarim";
console.log(boshHarf(natija));*/

/*let Massiv = [1, 2, 3, 4, 5, 6];

function aylantir(arr) {
  let n = arr.length;

  for (let i = n - 1; i > 0; i--) {
    const birinchi = arr[i];

    arr[i] = arr[i - 1];

    arr[i - 1] = birinchi;
  }
  return arr;
}

console.log(aylantir(Massiv));*/



 

