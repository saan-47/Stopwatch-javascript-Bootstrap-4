var min = 00;
var sec = 00;
var milisec = 00;

var minheading = document.getElementById('min');
var secheading = document.getElementById('sec')
var miliheading = document.getElementById('milisec')

var intervel;


    function timmer(){
        milisec++;
        miliheading.innerHTML = milisec;
        if(milisec >= 100){
            sec++;
            secheading.innerHTML = sec;
            milisec = 0;
    }
    if(sec >= 60){
        min++;
        minheading.innerHTML = min;
        sec = 0;
    }
}
function start(){
    intervel = setInterval(timmer,10);
    document.getElementById('btStart').disabled = true;  
}

function stop(){
    clearInterval(intervel);
    document.getElementById('btStart').disabled = false;
    // document.getElementById('btStart').disabled = true;
}

function reset(){
    var min = 00;
    var sec = 00;
    var milisec = 00;
    miliheading.innerHTML = milisec;
    secheading.innerHTML = sec;
    minheading.innerHTML = min;
    stop();
}