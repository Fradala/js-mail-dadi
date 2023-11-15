const listaEmail = ['gino.22@gmail.com', 'mama.2@gmail.com', 'marta.2@gmail.com', 'mario.2@gmail.com'];

const userEmail = document.getElementById('email').value;



for (let i = 0 ; i < listaEmail.length ; i ++){
    const elemento = listaEmail[i];
    console.log(elemento, i)

   if(elemento != userEmail){
    console.log('non ce')
    document.getElementById ('verifica').innerHTML = ''

   }else if(elemento == userEmail){
    console.log('ce')
    document.getElementById ('verifica').innerHTML = 'perfetto la tua email esiste'
   }

}


