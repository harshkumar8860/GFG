let x = Math.floor((Math.random() * 10) + 1);
console.log(x);

let button = document.getElementById('button');
let count = 1;

button.addEventListener('click', () => {
    let input = document.getElementById('input');
    let y = input.value;
    console.log(y);
    if (x == y) {
        alert('Congrats! You guessed it right in ' + count + ' guess');
    }
    else if (x > y) {
        count++;
        alert('Oops! Try a larger number');
    } else {
        count++;
        alert('Oops! Try a smaller number');
    }

})


// function getValue(){
//     console.log(inputValue);
// }

// button.addEventListener("click", getValue){

// }
// let button = document.getElementById('button');
// button.addEventListener('click', alert('hey'
// ))

// if (condition) {

// }

