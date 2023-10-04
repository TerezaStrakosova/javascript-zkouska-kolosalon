"use strict"
// Proměnné
// checkboxy - typ kola
let horskeCheckbox = document.getElementById("horske")
let detskeCheckbox = document.getElementById("detske")
let silnicniCheckbox = document.getElementById("silnicni")
let gravelCheckbox = document.getElementById("gravel")

// počty kol
let horskePocet = document.getElementById("horske-pocet")
let detskePocet = document.getElementById("detske-pocet")
let silnicniPocet = document.getElementById("silnicni-pocet")
let gravelPocet = document.getElementById("gravel-pocet")

// radio - nosiče
let stresniRadio = document.getElementById("stresni")
let tazneRadio = document.getElementById("tazne")
let bezRadio = document.getElementById("bez")

// cenový návrh
let cenovyNavrh = document.getElementById("rozpocet")

let doba = document.getElementById("doba")  // doba půjčení
let cena = 0
let nosic = 0

function vypocet(event) {
    event.preventDefault()

    if (stresniRadio.checked) {
        nosic = 5
    } else if (tazneRadio.checked) {
        nosic = 10
    } else if (bezRadio.checked) {
        nosic = 0
    } 

    let cenaBezNosice = ((horskePocet.value * 500) + (detskePocet.value * 200) + (silnicniPocet.value * 1500) + (gravelPocet.value * 2500))
    let konecnaCena = (cenaBezNosice + (cenaBezNosice/100 * nosic)) * (doba.value) 

    console.log(`Cena za půjčení kol je ${konecnaCena}`)

    // Kontrola, zda nejsou všechny checkboxy nezaškrtnuté
    if (!horskeCheckbox.checked && !detskeCheckbox.checked && !silnicniCheckbox.checked && !gravelCheckbox.checked){
        // Pokud nejsou vybrány žádné kolonky, zobrazte varování
        alert("Vyberte alespoň jedno kolo.");
    // Kontrola, zda nejsou všechny radio buttony neoznačené
    } else if (!stresniRadio.checked && !tazneRadio.checked && !bezRadio.checked) {
        // Pokud nejsou vybrány žádné radio buttony, zobrazte varování
        alert("Zvolte prosím, zda máte zájem o cyklonosič.")
    } else if (cenovyNavrh.value == "") {
        alert("Prosím zadejte cenový návrh.")
    } else if(cenovyNavrh.value < konecnaCena){
        document.querySelector("#rozpocet-odpoved").textContent = `Cena za půjčení kol je ${konecnaCena} Kč, takže uvedený rozpočet nestačí.`
    } else {
        document.querySelector("#rozpocet-odpoved").textContent = `Cena za půjčení kol je ${konecnaCena} Kč, takže uvedený rozpočet bude stačit.`
    }
}

function kontrolaMail() {
    // Kontrola, zda nejsou všechny checkboxy nezaškrtnuté
    if (!horskeCheckbox.checked && !detskeCheckbox.checked && !silnicniCheckbox.checked && !gravelCheckbox.checked){
        // Pokud nejsou vybrány žádné kolonky, zobrazte varování
        alert("Vyberte alespoň jedno kolo.");
    } else if (!(document.querySelector("#mail").value.includes("@"))) {
        alert("Email není správně. Musí obsahovat @.")
    } 
}