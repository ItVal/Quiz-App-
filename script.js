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

// ProgressBar
let k = 100;
setInterval(() =>{
    if(k >= 0 && quiz.style.display == "flex" ){
        document.querySelector("#progressBs").style.width = k + "%";
        k--
    }
}, 600)


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

//reset radio
// const inputs = cocument.querySelectorAll('input[type="radio"]');
// const reset = document.querySelectorAll("res-containeur")
// function reunitialiser(){
//     for (let j = 0; j < inputs.length; j++){
//         reset[j].style.border = "1px solid #bbb8b8";
//     }

// }

//quiz objet
const quizData = [
    {
        question: "Dans quel balise HTML plaçons-nous le code JavaScript?",
        a: "La balise js",
        b: "La balise javascript",
        c: "La balise script",
        d: "La balise rel",
        correct: "b",
    },
    {
        question: "Comment faire appelle à une fonction nommée « sum »?",
        a: "Sum()",
        b: "Call function sum()",
        c: "Call sum()",
        d: "Aucune de ces réponses n'est vraie",
        correct: "a",
    },
    {
        question: "Quelle est la syntaxe correcte pour faire référence à un script externe appelé « myscript.js »?",
        a: "<script href='myscript.js'>",
        b: "<script name='myscript.js'>",
        c: "<script src='myscript.js'>",
        d: "out les réponses sont vrais",
        correct: "c",
    },
    {
        question: "Le fichier externe de JavaScript doit contenir la balise <script>?",
        a: "Vrai",
        b: "Faux",
        c: "Vrai mais pas obligatoire",
        d: "Toutes les réponses sont mauvaises",
        correct: "b",
    },
    {
        question: "Quel est le bon endroit pour insérer un code JavaScript?",
        a: "La section <head>",
        b: "Les deux sections <head> et <body> sont correctes",
        c: "La section <body>",
        d: "Aucune de ces réponses n’est vraie.",
        correct: "c",
    },
    {
        question: "Comment écrivez-vous « Hello World » dans une boîte d’alerte?",
        a: "msg('Hello World');",
        b: "alert('Hello World');",
        c: "msgBox('Hello World');",
        d: "alertBox('Hello World');",
        correct: "b",
    },
    {
        question: "Comment écrire une condition IF en JavaScript?",
        a: "if a = 2 then",
        b: "if a = 2",
        c: "if a == 2 else",
        d: "if (a == 2)",
        correct: "d",
    },
    {
        question: "Comment créer une fonction en JavaScript?",
        a: "function f()",
        b: "function = f()",
        c: "function:f()",
        d: "Aucune de ces réponses n’est vraie.",
        correct: "a",
    },
    {
        question: "Quelle est la syntaxe correcte pour vérifier la valeur de « c » ?",
        a: "if (c == 'XYZ') then { } else { }",
        b: "if (c = 'XYZ') then { } else { }",
        c: "if (c == 'XYZ') { } else { }",
        d: "if (c = 'XYZ') { } else { }",
        correct: "c",
    },
    {
        question: "Quel est l’objet qui se trouve dans TOP de la racine en JavaScript ?",
        a: "url",
        b: "top",
        c: "window",
        d: "document",
        correct: "d",
    },
    {
        question: "Comment insérer un commentaire sur plusieurs lignes?",
        a: "//Ce commentaire a plus d'une ligne //",
        b: "1.",
        c: "/* Ce commentaire a plus d'une ligne */",
        d: "Tout les réponses sont vrais",
        correct: "c",
    },
    {
        question: "Comment pouvez-vous ajouter un commentaire dans un code JavaScript?",
        a: "//Ceci est un commentaire",
        b: "'Ceci est un commentaire'",
        c: "/Ceci est un commentaire",
        d: "#Ceci est un commentaire",
        correct: "a",
    },
    {
        question: "Comment trouvez-vous le nombre avec la plus grande valeur de « a » et « b »?",
        a: "Math.ceil(a, b)",
        b: "Math.max(a, b)",
        c: "ceil(a, b)",
        d: "top(a, b)",
        correct: "b",
    },
    {
        question: "JavaScript est identique à Java?",
        a: "Vrai",
        b: "Faux",
        c: "Plutôt identique avec C",
        d: "Aucune bonne réponse",
        correct: "b",
    },
    {
        question: "Comment arrondir le nombre 3.12 à un nombre entier plus proche?",
        a: "Math.round(3.12)",
        b: "Math.rnd(3.12)",
        c: "float(3.12)",
        d: "Math.float(3.12)",
        correct: "d",
    },



];


