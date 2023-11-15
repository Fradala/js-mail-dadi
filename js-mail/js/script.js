const buttonElement = document.querySelector('button');


buttonElement.addEventListener('click' , function(){

    const listaEmail = ['gino.22@gmail.com', 'mama.2@gmail.com', 'marta.2@gmail.com', 'mario.2@gmail.com'];

    const userEmail = document.getElementById('email').value;

    let rispostaNo
    let rispostaSi

    for (let i = 0 ; i < listaEmail.length ; i ++){
        const elemento = listaEmail[i];
        console.log(elemento, i)

    if(elemento != userEmail){
        console.log('non ce')
        rispostaNo = elemento != userEmail
        
        

    }else if(elemento == userEmail){
        console.log('ce')
        rispostaSi = elemento == userEmail
        
    }

    }

   rispostaNo = document.getElementById ('verifica').innerHTML = 'non ce'
   rispostaSi = document.getElementById ('verifica').innerHTML = 'ce'

});






