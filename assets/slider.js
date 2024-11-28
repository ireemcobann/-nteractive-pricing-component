const fiyat = 0.00016;

function hesapla () {
    // console.log(slider.this);
    const gosterim = Number((slider.value) * 1000);
    let toplamFiyat = Math.round(gosterim * fiyat);
    console.log(toplamFiyat);

    if (yillikOdeme.checked) {
toplamFiyat = (toplamFiyat * 12) * 0.75 // %25 indirim
    }

    fiyatTxt.innerText = toplamFiyat + '$';
}

slider.addEventListener('input', hesapla);
yillikOdeme.addEventListener('click' , hesapla);

// sayfa çalıştığında hesapla tetiklenmesi için kendim manuel olarak ilgili fonksiyonu 
// çağırıyorum. manuel çağırdığım için this kelimesi çalışmıyor.
// çünkü element üzerinden tetiklenmiyor.
hesapla ();

slider.classList.add('yeni'); // ilgili elemana yeni bir class ataması yapar.
slider.classList.remove('yeni'); // ilgli elemandan yazılan class ı siler.
slider.classList.toggle('toggleClass'); //  toggle yazılan class name varsa çıkarır,
// yoksa ekler. toggl'ı genellikle light/dark modu için kullanıyoruz.

console.count('Nihat');
console.count('Nihat');
console.count('Nihat');
console.count('Nihat');
console.count('Nihat');
console.count('Nihat');

// butona bastığımızda kaç tane çıktı ürettik ona bakabiliriz.


/**
 * sums two numbers - bu fonksiyon 2 numarayı toplar
 * @param {number} firsNumber 
 * @param {number} secondNumber 
 * @returns {number}
 */
function sum(firsNumber, secondNumber) {
    return firsNumber + secondNumber;
}
sum()


