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

//
const keys = document.querySelectorAll('.key');