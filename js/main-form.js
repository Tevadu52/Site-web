const form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    let errorContainer = document.querySelector(".message-error");
    let errorList = document.querySelector(".message-error ul")
    let successContainer = document.querySelector(".message-success");

    errorList.innerHTML = ""
    errorContainer.classList.remove('visible')
    
    successContainer.classList.remove('visible')

    let email = document.querySelector('#email')
    if(email.value === ''){
        errorContainer.classList.add('visible')
        email.classList.remove('success')

        let err = document.createElement('li')
        err.innerHTML = "Le champ Email est vide !"
        errorList.appendChild(err)
    }else{
        email.classList.add('success')
    }

    let pseudo = document.querySelector('#pseudo')
    if(pseudo.value === ''){
        errorContainer.classList.add('visible')
        pseudo.classList.remove('success')

        let err = document.createElement('li')
        err.innerHTML = "Le champ pseudo est vide !"
        errorList.appendChild(err)
    }else{
        pseudo.classList.add('success')
    }

    let password = document.querySelector('#password')
    let passCheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$")

    if(password.value.lenght<=8 || passCheck.test(password.value) === false){
        errorContainer.classList.add('visible')
        password.classList.remove('success')

        let err = document.createElement('li')
        err.innerHTML = "Le mot de passe doit faire plus de 8 character et contenir au moins characters spécial, une majuscule, un chiffre et une minuscule."
        errorList.appendChild(err)
    }else{
        password.classList.add('success')
    }

    let passwordConfirm = document.querySelector('#password2')
    if( passwordConfirm.value == '' || passwordConfirm.value !== password.value ){
        errorContainer.classList.add('visible')
        passwordConfirm.classList.remove('success')

        let err = document.createElement('li')
        err.innerHTML = "La confirmation du mot de passe est mauvaise"
        errorList.appendChild(err)
    }else{
        passwordConfirm.classList.add('success')
    }

    let formule = document.querySelector('#formule')
    if( formule.value == ''){
        errorContainer.classList.add('visible')
        formule.classList.remove('success')

        let err = document.createElement('li')
        err.innerHTML = "Veuillez choisir une formule"
        errorList.appendChild(err)
    }else{
        formule.classList.add('success')
    }

    if(!errorContainer.classList.contains('visible')){
        successContainer.classList.add('visible')
    }
})