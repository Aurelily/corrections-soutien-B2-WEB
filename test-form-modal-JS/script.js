//---------------------------------------------------
// FONCTIONS
//---------------------------------------------------

// Fonction pour créer la modal : créer les éléments dans le mainContainer
function createModal(mainContainer) {


    // Je crée l'élement : <div class="myModalBackground">
    let myModalBackground = document.createElement("div");
    myModalBackground.classList.add("myModalBackground");
    


    // Je crée l'élement : <div class="formContainer">
    let formContainer = document.createElement("div");
    formContainer.classList.add("formContainer");
    

    // Je crée l'élement : <button class="closeModal">X</button>
    let btCloseModal = document.createElement("button");
    btCloseModal.classList.add("closeModal");
    btCloseModal.textContent = "X";
   


    // Je crée l'élement : <form action="" method="post" id="myForm">
    let myForm = document.createElement("form");
    myForm.setAttribute("action", "");
    myForm.setAttribute("method", "post");
    myForm.setAttribute("id", "myForm");

    // <input type="text" name="login" id="login" placeholder="Login">
    let loginInput = document.createElement("input");
    loginInput.setAttribute("type", "text");
    loginInput.setAttribute("name", "login");
    loginInput.setAttribute("id", "login");
    loginInput.setAttribute("placeholder", "login");

    // <input type="text" name="login" id="login" placeholder="Login">
    let passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("name", "password");
    passwordInput.setAttribute("id", "password");
    passwordInput.setAttribute("placeholder", "password");
   

    // Je crée l'élement : <button type="submit" id="btRegister">S'inscrire</button>
    let btRegister = document.createElement("button");
    passwordInput.setAttribute("id", "btRegister");
    btRegister.textContent = "S'inscrire";

    // J'insère tous les enfants dans leurs parents rspectifs
    mainContainer.appendChild(myModalBackground);
    myModalBackground.appendChild(formContainer);
    formContainer.appendChild(btCloseModal);
    formContainer.appendChild(myForm);
    myForm.appendChild(loginInput);
    myForm.appendChild(passwordInput);
    myForm.appendChild(btRegister);


    // J'écoute le clic sur le bouton fermer et j'appele la fonction removeChild(parent)
    btCloseModal.addEventListener("click", () => {
        removeAllChildNodes(mainContainer)
    });
    
}  



// Fonction pour fermer la modal : supprime un element enfant de son parent
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



//---------------------------------------------------
// SCRIPT
//---------------------------------------------------

let btOpenModal = document.getElementById('btOpenModal');
let mainContainer = document.getElementById("mainContainer");


btOpenModal.addEventListener("click", () => {
    createModal(mainContainer);
})
