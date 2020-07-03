// Exercise
// Write the code necessary to do the following:

// 1)Select the section with an id of container without using querySelector.
const sectionContainer = document.getElementById('container');

// 2)Select the section with an id of container using querySelector.
const sectionQuerySelector = document.querySelector('#container');

// 3)Select all of the list items with a class of “second”.
const allSecondLi = document.querySelectorAll('li.second');

// 4) Select a list item with a class of third, but only the
// list item inside of the ol tag.
const allThirdOl = document.querySelectorAll('ol li.third');

// 5) Give the section with an id of container the text “Hello!”.
// sectionQuerySelector.innerText = 'Hello!';

// 6) Add the class main to the div with a class of footer.
const footerMain = document.querySelector('.footer');
footerMain.classList.add('Main');

// 7) Remove the class main on the div with a class of footer.
footerMain.classList.remove('Main');

// 8)Create a new li element.
const newLiElement = document.createElement('li');
// 9)Give the li the text “four”.
newLiElement.innerText = 'four';
// 10) Append the li to the ul element.
document.querySelector('ul').append(newLiElement);

// 11) Loop over all of the lis inside the ol tag and give
// them a background color of “green”.
const allOlLi = document.querySelectorAll('ol li');
// console.log(allOlLi);

for (const li of allOlLi) {
        li.style.backgroundColor = 'green';
}

// 12) Remove the div with a class of footer
footerMain.remove();
