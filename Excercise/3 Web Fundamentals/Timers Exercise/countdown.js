// Write a function called countdown that accepts a number as a parameter and
// every 1000 milliseconds decrements the value and console.logs it.
// Once the value is 0 it should log “DONE!” and stop.

function countDown(num) {
        let inputNum = num;

        const intervalID = setInterval(function() {
                if (inputNum === 0) {
                        console.log('DONE!');
                        clearInterval(intervalID);
                } else {
                        console.log(inputNum);
                        inputNum -= 1;
                }
        }, 1000);
}
