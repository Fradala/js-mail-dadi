const array = ['gino.22@gmail.com', 'mama.2@gmail.com', 'marta.2@gmail.com', 'mario.2@gmail.com'];

const userEmail = document.getElementById('email').value;

if(userEmail != array){
    console.log('non ce')
}else if(userEmail === array){
    
    console.log('ce')
}
