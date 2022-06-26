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
// 

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

const radioBtn = document.querySelectorAll(".res")
const affQuestion = document.querySelector("#titre")
const assertionA = document.querySelector("#assA")
const assertionB = document.querySelector("#assB")
const assertionC = document.querySelector("#assC")
const assertionD = document.querySelector("#assD")
let contTab = 0
let score = 0

//chargement de questions
function loadQuiz() {
    deselectAnswers()
     const tabQuiz = quizData[contTab]
     const nextQ = document.querySelector("#charQ")
     affQuestion.innerText = tabQuiz.question
     assertionA.innerText = tabQuiz.a
     assertionB.innerText = tabQuiz.b
     assertionC.innerText = tabQuiz.c
     assertionD.innerText = tabQuiz.d

     let questionNumber = parseInt(contTab) + 1
     nextQ.innerText = "Question " + questionNumber + "/15"   
}
loadQuiz()

//deselect answers
function deselectAnswers() {
    radioBtn.forEach(btnRadio => btnRadio.checked = false)
}

// capture de la selection
function captSelected() {
    let reponse 
    radioBtn.forEach(btnRadio => {
        if (btnRadio.checked){
            reponse = btnRadio.id
        }
    })
    return reponse 
}

// next to finish btn
function boutonTerminer(){
    if (contTab == 14) {
        submit.innerText = "Terminer";
    }
}
//reset
// function reunitialiser(){
//    for (let j = 0; j < inputs.length; j++){
//    reset[j].style.border = "1px solid #bbb8b8"; 
//   }
// }
//img manager
function imgEchec() {
    if (score < 8) {
        imgR.innerHTML = '<svg width="174" height="174" viewBox="0 0 174 174" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M116.464 60.2891C116.464 59.5414 115.852 58.9297 115.105 58.9297L103.89 58.9807L86.9996 79.1164L70.1264 58.9977L58.8945 58.9467C58.1469 58.9467 57.5352 59.5414 57.5352 60.3061C57.5352 60.6289 57.6541 60.9348 57.858 61.1897L79.9648 87.5275L57.858 113.848C57.6527 114.097 57.5388 114.409 57.5352 114.732C57.5352 115.48 58.1469 116.091 58.8945 116.091L70.1264 116.04L86.9996 95.9047L103.873 116.023L115.088 116.074C115.835 116.074 116.447 115.48 116.447 114.715C116.447 114.392 116.328 114.086 116.124 113.831L94.0514 87.5105L116.158 61.1727C116.362 60.9348 116.464 60.6119 116.464 60.2891Z" fill="#FF3838"/><path d="M87 11.0469C44.9613 11.0469 10.875 45.1332 10.875 87.1719C10.875 129.211 44.9613 163.297 87 163.297C129.039 163.297 163.125 129.211 163.125 87.1719C163.125 45.1332 129.039 11.0469 87 11.0469ZM87 150.383C52.098 150.383 23.7891 122.074 23.7891 87.1719C23.7891 52.2699 52.098 23.9609 87 23.9609C121.902 23.9609 150.211 52.2699 150.211 87.1719C150.211 122.074 121.902 150.383 87 150.383Z" fill="#FF3838"/></svg>';
    }
}

//Next Button
const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener('click', () => {
    // reunitialiser()
    const reponse = captSelected()
 
    k = 100;
    i = 60
    if (reponse){
        if (reponse === quizData[contTab].correct){
            score++
        }
        contTab++
        boutonTerminer()

        if(contTab < quizData.length){
            loadQuiz()
        }
        
        else{
            document.getElementById("question").style.display = "none";
            imgEchec()
            document.getElementById("resultat").style.display = "flex";
            scoreFinal.innerHTML = `<h2> ${score}/${quizData.length} </h2>`
        }
    }

})


