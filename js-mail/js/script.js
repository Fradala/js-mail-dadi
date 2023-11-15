const buttonElement = document.querySelector('button');


buttonElement.addEventListener('click' , function(){

    const listaEmail = ['gino.22@gmail.com', 'mama.2@gmail.com', 'marta.2@gmail.com', 'mario.2@gmail.com'];

    const userEmail = document.getElementById('email').value;

    let rispostaNo
    let rispostaSi

    for (let i = 0 ; i < listaEmail.length ; i ++){
        const elemento = listaEmail[i];
        console.log(elemento, i)

        if(elemento == userEmail){
            console.log('non ce')
            rispostaSi = elemento == userEmail
            
            

        }else{

        }
            
        

    }

    if(rispostaSi){
        document.getElementById ('verifica').innerHTML = 'perfetto la tua email esiste'
    

    } 

});






