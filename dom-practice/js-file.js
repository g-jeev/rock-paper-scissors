// // Select elements
// const container = document.querySelector("#container");

// const redParagraph = document.createElement("p");
// redParagraph.textContent = "Hey i'm red!";
// redParagraph.style.color = "red";

// container.appendChild(redParagraph);

// const blueHeading = document.createElement('h3');
// blueHeading.textContent = "I'm blue!";
// blueHeading.style.color = "blue";

// container.appendChild(blueHeading);

// const pinkDiv = document.createElement('div');
// pinkDiv.style.backgroundColor = 'pink';
// pinkDiv.style.border = '1px, solid black';


// const innerH1 = document.createElement('h1');
// innerH1.textContent = "I'm in div";

// container.appendChild(innerH1);

// const innerP = document.createElement('p');
// innerP.textContent = "ME TOO!";

// container.appendChild(innerP);

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
