
/*DADI*/

const numeroBot = Math.floor(Math.random()*6) + 1
console.log(numeroBot)

const numeroUser = Math.floor(Math.random()*6) + 1
console.log(numeroUser)

if( numeroBot > numeroUser){
    console.log(' Bot win, User lose')
}else if( numeroUser > numeroBot){
    console.log(' User win, Bot lose')
}else if( numeroUser == numeroBot){
    console.log('pareggio')
}

