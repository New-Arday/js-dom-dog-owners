console.log(data);

// create a functions that contains all the list items
function buttons() {
  // LOOP through the data
  data.filter(function (dog) {
    const ulElement = document.querySelector("ul");
    const liElement = document.createElement("li");
    ulElement.append(liElement);
    liElement.innerText = dog.name;
    liElement.className = "dogs-list__button";
  });
}
buttons();
