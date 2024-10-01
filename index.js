let count = 10;
let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'brown', 'black', 'grey'];

let bgColorChange = setInterval(() => {
    count--;
    document.body.style.backgroundColor = colors[count];
    if (count === 0) {
        clearInterval(bgColorChange);
    }
}, 1000);

setTimeout(() => {
    document.body.style.backgroundColor = "white";
    console.log('Finished');
}, 12000);