let time = document.querySelector('#time');

setInterval(function(){
    let  date = new Date();
    time.innerHTML = date.toLocaleTimeString();
    
},1000);