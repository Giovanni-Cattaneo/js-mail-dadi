console.log("hello world");

let mail = document.getElementById("mail")

let btn = document.getElementById("send")

let mailingList = ["123@gmail.com", "132@gmail.com", "213@gmail.com", "321@gmail.com"]

console.log(mailingList);

btn.addEventListener("click", myFunction)

function myFunction() {
    if (mailingList.includes(document.getElementById("mail").value)) {
        console.log("true");
        
    } else {
        console.log("false");
        
    }
}



// function myFunction() {
//     console.log(mail);
//
// }

//() => console.log(document.getElementById("mail").value))