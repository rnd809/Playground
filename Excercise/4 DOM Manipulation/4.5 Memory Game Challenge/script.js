const gameContainer = document.getElementById('game');
const currentClicks = document.getElementById('currentClicks');
const currentScore = document.getElementById('currentScore');
// This is a reset button for the game
const resetButton = document.getElementById('restatGame');
// Select The Current Player Title
const currentPlayerSpan = document.querySelector('#currentPlayers span');

// Declaring the All Time Top Element
const btnAllTimeScores = document.getElementById('btnAllTimeScores');
const olListTop = document.getElementById('olListTop');
// Declaring the All Time Bottom Element
const btnAllTimeBottom = document.getElementById('btnAllTimeBottom');
const olListBottom = document.getElementById('olListBottom');

// Get the modal Div
const modal = document.getElementById('newGameButton');
// Get the Cancel Button
const cancelBtnForm = document.getElementById('formCancel');
// New Game Button:
const newGameButtonRed = document.getElementById('btnNewGame');
// Selecting The X span inside the form.
const spanXExit = document.querySelector('.imgcontainer span');
// Selecting the Form Element
const formModal = document.querySelector('#formPopUp');

let currentClicksCounts = 0;
let card1 = null;
let card2 = null;
let cardsFlipped = 0;
let noClicking = false;

// New Users Added Object
const newUserNamePlayer = {};

// At the end of the game we give the user its final score
function scoreRating(finalScored) {
        const scoreRating = {
                10: 100,
                12: 90,
                14: 80,
                16: 70,
                18: 60,
                20: 50,
                22: 40,
                24: 30,
                26: 20,
                28: 10,
                30: 5,
                32: 0,
        };
        if (finalScored > 32) {
                return -(currentClicksCounts - 32);
        }
        return scoreRating[finalScored];
}

const COLORS = ['red', 'blue', 'green', 'orange', 'purple', 'red', 'blue', 'green', 'orange', 'purple'];

const countryFlags = {
        DR: 'Dominican Republic',
        JP: 'Japan',
        USA: 'United States',
        SK: 'South Korea',
        CT: 'Chinese Taipei',
        MEX: 'Mexico',
        AU: 'Australia',
        VEN: 'Venezuela',
        NL: 'Netherlands',
        PR: 'Puerto Rico',
        PAN: 'Panama',
};

function shuffle(array) {
        let counter = array.length;

        // While there are elements in the array
        while (counter > 0) {
                // Pick a random index
                const index = Math.floor(Math.random() * counter);

                // Decrease counter by 1
                counter--;

                // And swap the last element with it
                const temp = array[counter];
                array[counter] = array[index];
                array[index] = temp;
        }

        return array;
}

const shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// We add the CSS jokeImg class
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
        for (const color of colorArray) {
                const newDiv = document.createElement('div');
                newDiv.classList.add(color);
                // Adding the Joker Image As Placed Holder
                newDiv.classList.add('jokerImg');
                newDiv.addEventListener('click', handleCardClick);
                gameContainer.append(newDiv);
        }
}

function handleCardClick(e) {
        if (noClicking) {
                return;
        }
        if (!e.target.classList.contains('jokerImg')) {
                return;
        }
        currentClicksCounts++;
        currentClicks.innerText = currentClicksCounts;

        const currentCard = e.target;
        // Removing the joker image and giving it is background color
        currentCard.classList.remove('jokerImg');
        currentCard.style.backgroundColor = currentCard.classList[0];

        if (!card1 || !card2) {
                // console.log('Inside the 3rd if statement');
                // Once inside the if statement we add the class 'flipped' to current Event.Target
                // currentCard.classList.add('flipped');
                card1 = card1 || currentCard;
                card2 = currentCard === card1 ? null : currentCard;
        }

        if (card1 && card2) {
                noClicking = true;
                // debugger
                const gif1 = card1.className;
                const gif2 = card2.className;

                if (gif1 === gif2) {
                        cardsFlipped += 2;
                        card1.removeEventListener('click', handleCardClick);
                        card2.removeEventListener('click', handleCardClick);
                        card1 = null;
                        card2 = null;
                        noClicking = false;
                } else {
                        setTimeout(function() {
                                card1.classList.add('jokerImg');
                                card2.classList.add('jokerImg');
                                card1 = null;
                                card2 = null;
                                noClicking = false;
                        }, 1000);
                }
        }

        if (cardsFlipped === COLORS.length) {
                console.log(`Your final scored is: ${scoreRating(currentClicksCounts)}`);
                currentScore.innerText = scoreRating(currentClicksCounts);
                alert('game over!');
        }
}

createDivsForColors(shuffledColors);

// Remove all the Divs from current
function removeDivsForColors() {
        while (gameContainer.hasChildNodes()) {
                // eslint-disable-next-line prefer-const
                for (let itemDiv of gameContainer.children) {
                        // qw += 1;
                        // console.log(qw);
                        // itemDiv.remove();
                        gameContainer.removeChild(itemDiv);
                }
        }
}

// All Event Listener

// Alltime Scores Event Listeners
btnAllTimeScores.addEventListener('click', function(event) {
        event.preventDefault();
        event.target.classList.toggle('active');
        olListTop.classList.toggle('classInvi');
});

btnAllTimeBottom.addEventListener('click', function(event) {
        event.preventDefault();
        event.target.classList.toggle('active');
        olListBottom.classList.toggle('classInvi');
});

// New Game Button Event Listener To Pop Up The Menu
newGameButtonRed.addEventListener('click', function() {
        modal.style.display = 'block';
});
// Cancel Button On the Popup Form
cancelBtnForm.addEventListener('click', function() {
        modal.style.display = 'none';
});
// Exit Span X On the Popup Form
spanXExit.addEventListener('click', function() {
        modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target === modal) {
                modal.style.display = 'none';
        }
};

// Function that takes the values of the forms
function organizedFormUser() {
        removeDivsForColors();
        const userNameForm = document.querySelector('input[name="uname"]');
        const userNameCountry = document.querySelector('select[name="country"]');
        console.log(userNameForm.value);
        console.log(userNameCountry.value);
        currentPlayerSpan.innerText = userNameForm.value;
        currentClicksCounts = 0;
        currentClicks.innerText = currentClicksCounts;
        createDivsForColors(shuffle(COLORS));
        modal.style.display = 'none';
}

// Event Listerner for the submit action
formModal.addEventListener('submit', function(event) {
        event.preventDefault();
        organizedFormUser();
});

// Event Listerner for the reset action
resetButton.addEventListener('click', function(event) {
        event.preventDefault();
        removeDivsForColors();
        currentClicksCounts = 0;
        currentClicks.innerText = currentClicksCounts;
        createDivsForColors(shuffle(COLORS));
        modal.style.display = 'none';
});
