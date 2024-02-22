console.log("hello world");

let mail = document.getElementById("mail")

let btn = document.getElementById("send")

let mailingList = ["123@gmail.com", "132@gmail.com", "213@gmail.com", "321@gmail.com"] // array della mailing list

console.log(mailingList);

btn.addEventListener("click", myFunction) // Al cliccare del btn atttiva la funzione

function myFunction() { // Funzione, al click verifica se il valore inserito nell'inpu mail è presente nella mailingList
    let correct = document.querySelector(".true")
    let inCorrect = document.querySelector(".false")
    
    if (mailingList.includes(document.getElementById("mail").value)) {
        console.log("true");
        correct.innerHTML += "Acces granted"
        correct.style.backgroundColor = "green";
        
    } else {
        console.log("false");
        inCorrect.innerHTML += "Acces denied";
        inCorrect.style.backgroundColor = "red";
    }
}



let userNumber = Math.floor((Math.random() * 6) + 1) // questa operazione permette di creare un numero randomico tra 1 e 6
let desktopNumber = Math.floor((Math.random() * 6) + 1)

console.log(userNumber);
console.log(desktopNumber);

let numbs = [userNumber, desktopNumber]
let results = document.getElementById("results")

if(userNumber > desktopNumber){ //questo if serve a determinare quale dei due valori sia maggior e etsmpare in pagina il risultato
    console.log("User win");
    results.innerHTML += "User win"
    results.style.backgroundColor = "green";
}else if(userNumber < desktopNumber){
    console.log("Desktop win");
    results.innerHTML += "Desktop win"
    results.style.backgroundColor = "red";
}else{
    console.log("It's a tie, ready for round two?");
    results.innerHTML += "It's a tie, ready for round two?"
    results.style.backgroundColor = "lightgray";
}