// Select The Button For Pop Up
const createNewMeme = document.querySelector('#createNewMeme');
// Select The Submit Button To Add Newly Creative Meme To the Body Div
const submitNewMeme = document.querySelector('#submitButtom');

// FormContainer
const memeGeneratorPop = document.querySelector('#formContainer');
// ImageContainer
const imageContainer = document.querySelector('.imgcontainer');
// Form Close Button
const closeButton = document.querySelector('.close');

// Input URL
const inputUrl = document.querySelector('input[type="url"');
// Input URL
const topText = document.querySelector('#topText');
// Input URL
const bottomText = document.querySelector('#bottomText');
// Select The Div Meme Example
const sampleImage = document.querySelector('#sampleImage');

// Adding an event listern to The Append Div
const appendedMeme = document.querySelector('#appendedMeme');

createNewMeme.addEventListener('click', function() {
        memeGeneratorPop.style.display = 'block';
});

window.addEventListener('click', function(event) {
        if (event.target === memeGeneratorPop) {
                memeGeneratorPop.style.display = 'none';
        }
});

/* The Close Button (x) */
closeButton.addEventListener('click', function() {
        memeGeneratorPop.style.display = 'none';
});

// The Inputs Values Of The Forms
inputUrl.addEventListener('input', function(event) {
        event.preventDefault();
        const { value } = inputUrl;
        if (imageContainer.childElementCount === 3) {
                sampleImage.style.display = 'none';
        }
        if (!value) {
                sampleImage.style.display = 'block';
                imageContainer.lastChild.remove();
                return;
        }
        if (imageContainer.childElementCount < 3) {
                sampleImage.style.display = 'none';
                const newDivSamepleImage = document.createElement('div');
                newDivSamepleImage.classList.add('newlyCreateDiv');
                const newCreatingImage = document.createElement('img');
                newCreatingImage.src = inputUrl.value;
                // Creating The Top Paragraphs
                const topTextInput = document.createElement('p');
                topTextInput.classList.add('memeTopTextForm');
                // Creating The Bottom Paragraphs
                const bottomTextInput = document.createElement('p');
                bottomTextInput.classList.add('memeBottomTextForm');
                newDivSamepleImage.appendChild(newCreatingImage);
                newDivSamepleImage.appendChild(topTextInput);
                newDivSamepleImage.appendChild(bottomTextInput);
                imageContainer.appendChild(newDivSamepleImage);
        }
});
topText.addEventListener('input', function(event) {
        event.preventDefault();
        const { value } = topText;
        const createdDiv = document.querySelector('.memeTopTextForm');

        if (inputUrl.value) {
                createdDiv.innerText = value;
        }
});
bottomText.addEventListener('input', function(event) {
        event.preventDefault();
        const { value } = bottomText;
        const createdDiv = document.querySelector('.memeBottomTextForm');

        if (inputUrl.value) {
                createdDiv.innerText = value;
        }
});

// function appendNewCreatedDivs(newMeme) {
//         const appendedMeme = document.querySelector('#appendedMeme');
//         appendedMeme.appendChild(newMeme);
// }
submitNewMeme.addEventListener('click', function(event) {
        event.preventDefault();

        if (inputUrl.value) {
                const createdMeme = document.querySelector('.newlyCreateDiv');
                const deleteButton = document.createElement('span');
                deleteButton.classList.add('delete');
                deleteButton.innerText = 'Remove';
                const cloneTheCreatedDiv = createdMeme.cloneNode(true);
                cloneTheCreatedDiv.classList.add('collectionMemeLayout');
                cloneTheCreatedDiv.appendChild(deleteButton);
                appendedMeme.appendChild(cloneTheCreatedDiv);
                // appendNewCreatedDivs(cloneTheCreatedDiv);
                sampleImage.style.display = 'block';
                imageContainer.lastChild.remove();
                memeGeneratorPop.style.display = 'none';
        }
        // We are reseting the value of the inputs
        inputUrl.value = '';
        topText.value = '';
        bottomText.value = '';
});

appendedMeme.addEventListener('click', function(event) {
        const getSpan = event.target;
        if (getSpan.classList.contains('delete')) {
                getSpan.parentElement.remove();
        }
});
