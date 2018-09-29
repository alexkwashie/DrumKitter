// 1. Create a function to listen to any key press in the HTML window - ${e.KeyCode} gets the key pressed

window.addEventListener('keydown', function(e) {
    //step1 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    //step 5 
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    //step2
    if (!audio) {
        return;
    } //this will stop the function from excecuting when keycode is not recognised.

    //step4
    audio.currentTime = 0; //rewind to start, immediatley after its finshes playing

    //step3
    audio.play();

    //Step6
    key.classList.add('playing'); // Adds the playing class to the div which adds effects from the CSS.

});

//step8
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing'); // removes the playing class from the div (links with step6)
    // 'this' is equal to the .key(links to last section of step7)

}

//Create a function to remove 'playing' class
//step7
const keys = document.querySelectorAll('.key');
//This means, Loop through all seleceted elements and to listen to when transistionEnd occurs, and if that happends will do 'removeClass'.
keys.forEach(key => key.addEventListener('transitionend', removeTransition));