const mustWord = "password";
let tryWord = "";
let count = 0;
let next = '';


// writeWord.disable=false;

document.onkeypress = function (event) {
    next = event.key;
    writeWord(next);
    console.log(event);
};


function setCount() {
    count++;
}

function writeWord(next) {
    if (mustWord != tryWord) {
        inputGuess.value = '';

    }
    console.log(' function writeWord(next) { ');
    console.log(tryWord+' + '+next);
    if (next === mustWord.charAt(count)) {

        tryWord = tryWord + next;
        setCount();

        if (mustWord === tryWord) {
            inputGuess.value = 'Ok!';
            // writeWord.disable=true;
            return;
        }

        return;
    }

        tryWord = '';
    count=0;

};


