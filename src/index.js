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

    // addEventListner
    liElement.addEventListener("click", function () {
      console.log(document.querySelector(".dogs-list__button").value);
    });
  });
}
buttons();
