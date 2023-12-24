//Elementleri Seçelim.
const apiKey = "fca_live_J89fdSHyKArd9OovMb2Bamlo9aXLi8Nl8vqPyC3f";
// var bigdecimal = require("bigdecimal");
const apiUrl = "https://api.freecurrencyapi.com/v1/latest";
const amountInput = document.querySelector("#number");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");
const btn = document.querySelector("#btn");



async function checkcorunsy() {
    const response = await fetch(apiUrl + `?apikey=${apiKey}`);
    var bilgi = await response.json();
    let a = Object.entries(bilgi.data);
    const amount = Number(amountInput.value.trim());
    let secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;
    let firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
    let birinciSayi = 0;
    let ikinciSayi = 0;
    for (var i = 0; i < a.length; i++) {
        // console.log(a[i][0])
        if (a[i][0] == firstOptionValue) {
            //console.log(a[i][0])
            let b = a[i][1]
            birinciSayi = Number(b.toFixed(2))
            //console.log(birinciSayi)
        }
        if (a[i][0] == secondOptionValue) {
            //console.log(a[i][0])
            let b = a[i][1]
            ikinciSayi = Number(b.toFixed(2))
            //console.log(ikinciSayi)
        }

    }

    console.log(birinciSayi)
    console.log(ikinciSayi)
    let sonuc = ((ikinciSayi * amount).toFixed(2) / birinciSayi).toFixed(2)
    console.log(sonuc)
    resultInput.innerHTML = `${amount} ${firstOptionValue} = ${sonuc} ${secondOptionValue}`

}


btn.addEventListener("click", () => {
    // checkweather();
    checkcorunsy()
})

