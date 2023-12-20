var windowSection = [...document.querySelectorAll('.chat-window')];

function showHideWindow(s){
    windowSection[s].classList.toggle('hide');
}

function minMaxWindow(m){
    windowSection[m].classList.toggle('minimize');
}
