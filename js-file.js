const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is a text-content!';

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = 'Hey! I\'m red!';
paragraph.style.color = 'red';

const header = document.createElement('h3');
header.classList.add("header");
header.textContent = "Hey! I'm blue";
header.style.color = "blue";

const secondContent = document.createElement('div');
secondContent.classList.add("second-div");
secondContent.style.cssText = "background-color: pink; border: 10px solid black";

const secondHeader = document.createElement("h1");
secondHeader.classList.add("second-header");
secondHeader.textContent = "Hey! I'm in the second div";

const secondParagraph = document.createElement("p");
secondParagraph.classList.add("second-paragraph");
secondParagraph.textContent = "ME TOO!";

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    alert("Hello World!");
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});

container.appendChild(content);
content.appendChild(paragraph);
content.insertBefore(header,paragraph);
secondContent.appendChild(secondHeader);
secondContent.appendChild(secondParagraph);
container.appendChild(secondContent);