let wynik = document.querySelector("#wynik")

let opisy = ["opis length","opis charAt","opis charCodeAt","opis toUpperCase","opis toLowerCase","opis indexOf","opis lastIndexOf","opis substr","opis substring","opis slice","opis replace"]

document.querySelector("#length").addEventListener("click", function () {
    let x = document.querySelector("#stringol").value
    wynik.innerHTML = (x.length)
    opis.innerHTML = opisy[0]
})

document.querySelector("#charAt").addEventListener("click", function () {
    let x = document.querySelector("#stringol").value
    let y = document.querySelector("#wartosc").value
    wynik.innerHTML = (x.charAt(y))
    opis.innerHTML = opisy[1]
})

document.querySelector("#charCodeAt").addEventListener("click", function () {
    let x = document.querySelector("#stringol").value
    let y = document.querySelector("#wartosc").value
    wynik.innerHTML = (x.charCodeAt(y))
    opis.innerHTML = opisy[2]
})

document.querySelector("#toUpperCase").addEventListener("click", function () {
    let x = document.querySelector("#stringol").value
    wynik.innerHTML = (x.toUpperCase())
    opis.innerHTML = opisy[3]
})

document.querySelector("#toLowerCase").addEventListener("click", function () {
    let x = document.querySelector("#stringol").value
    wynik.innerHTML = (x.toLowerCase())
    opis.innerHTML = opisy[4]
})

document.querySelector("#indexOf").addEventListener("click", function () {
    let x = document.querySelector("#stringol").value
    let y = document.querySelector("#wartosc").value
    wynik.innerHTML = (x.indexOf(y))
    opis.innerHTML = opisy[5]
})

document.querySelector("#lastIndexOf").addEventListener("click", function () {
    let x = document.querySelector("#stringol").value
    let y = document.querySelector("#wartosc").value
    wynik.innerHTML = (x.lastIndexOf(y))
    opis.innerHTML = opisy[6]
})

document.querySelector("#substr").addEventListener("click", function () {
    let x = document.querySelector("#stringol").value
    let y = document.querySelector("#wartosc").value
    y = parseInt(y.substring(0,y.indexOf(",")))
    let z = document.querySelector("#wartosc").value
    z = parseInt(z.substring(z.indexOf(",")+1))
    wynik.innerHTML = (x.substr(y,z))
    opis.innerHTML = opisy[7]
})

document.querySelector("#substring").addEventListener("click", function () {
    let x = document.querySelector("#stringol").value
    let y = document.querySelector("#wartosc").value
    y = parseInt(y.substring(0,y.indexOf(",")))
    let z = document.querySelector("#wartosc").value
    z = parseInt(z.substring(z.indexOf(",")+1))
    wynik.innerHTML = (x.substring(y,z))
    opis.innerHTML = opisy[8]
})

document.querySelector("#slice").addEventListener("click", function () {
    let x = document.querySelector("#stringol").value
    let y = document.querySelector("#wartosc").value
    y = parseInt(y.substring(0,y.indexOf(",")))
    let z = document.querySelector("#wartosc").value
    z = parseInt(z.substring(z.indexOf(",")+1))
    wynik.innerHTML = (x.slice(y,z))
    opis.innerHTML = opisy[9]
})

document.querySelector("#replace").addEventListener("click", function () {
    let x = document.querySelector("#stringol").value
    let y = document.querySelector("#wartosc").value
    y = y.substring(0,y.indexOf(","))
    let z = document.querySelector("#wartosc").value
    z = z.substring(z.indexOf(",")+1)
    wynik.innerHTML = (x.replace(y,z))
    opis.innerHTML = opisy[10]
})