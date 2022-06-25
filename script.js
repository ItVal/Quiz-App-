// validation name and email
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
//name
function validateName(){
    if (userName.value.length == 0){ 
    errName.innerText = "Renseignez un nom svp!"
    errName.style.color = "red";
   return false;
    }
    else if(userName.value.length < 3){ 
        errName.innerText = "Entrez un nom valide svp!"
        errName.style.color = "red";
        return false;
    }
    else{ 
            errName.innerText = ""
        }
        return true;
}
userName.addEventListener("input", validateName)
//email
function validateEmail(){
    const regex = /^([a-zA-Z09.]{4,20})@([a-zA-Z09.]{4,20})\.([a-zA-Z]{2,5})$/;
    if (userEmail.value.length == 0){ 
    errEmail.innerText = "Renseignez une adresse mail svp!"
    errEmail.style.color = "red";
    return false;
    }
    if (regex.test(userEmail.value)){ 
    errEmail.innerText = "Votre mail est valide, cliquer sur commencer"
    errEmail.style.color = "bleu";
   return true;
    }
    else { 
        errEmail.innerText = "Entrez une adresse mail valide svp!"
        errEmail.style.color = "red";
        return false;
    }
  
}
userEmail.addEventListener("input", validateEmail)

// Chargement section questions
const  beginPage = document.getElementById("btnBegin")
beginPage.addEventListener("click", function (e) {
    e.preventDefault();
    if (validateName() && validateEmail()){
        document.getElementById("accueil").style.display = "none";
        document.getElementById("question").style.display = "flex";
        // storage emai & name
        resName.innerHTML = userName.value;
        resEmail.innerHTML = userEmail.value;
        
    }
})



// Timeming for question
const quiz = document.getElementById("question");
let i = 60;
setInterval(() => {
    if (i >= 0 &&  quiz.style.display == "flex" ){
        timer.innerHTML = i;
        i--
    }
    // if (i <= 0){
    //     timeOut();
    // }
}, 1000);

// a function who help to going to the next question
// function timeOut() {
   
// }



