console.log("hello world");

let mail = document.getElementById("mail")

let btn = document.getElementById("send")

let mailingList = ["123@gmail.com", "132@gmail.com", "213@gmail.com", "321@gmail.com"] // array della mailing list

console.log(mailingList);

btn.addEventListener("click", myFunction) // Al cliccare del btn atttiva la funzione

function myFunction() { // Funzione, al click verifica se il valore inserito nell'inpu mail è presente nella mailingList
    if (mailingList.includes(document.getElementById("mail").value)) {
        console.log("true");
        
    } else {
        console.log("false");
        
    }
}

