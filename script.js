// validation name and email
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const errName = document.querySelector("#errName")
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


