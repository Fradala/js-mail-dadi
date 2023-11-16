const buttonElement = document.querySelector('button');


buttonElement.addEventListener('click' , function(){

    const listaEmail = ['gino.22@gmail.com', 'mama.2@gmail.com', 'marta.2@gmail.com', 'mario.2@gmail.com'];

    const userEmail = document.getElementById('email').value;

   
    let rispostaSi = false

    for (let i = 0 ; i < listaEmail.length ; i ++){
        const elemento = listaEmail[i];
        console.log(elemento, i)

        if(userEmail == listaEmail[i]){
            
            rispostaSi = true
            
            

        }else{

        }
            
        

    }

    if(rispostaSi){
        document.getElementById ('verifica').innerHTML = 'perfetto la tua email esiste'
    

    } else {
        document.getElementById ('verifica').innerHTML = 'la tua email non  esiste'
    }

});






