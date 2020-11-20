const buttonEl = document.querySelector(".btnList");
const divBox = document.querySelector(".divBox");
const reloadButton = document.querySelector(".reloadBtn");

//function to create a list of an array.
function createList() {
  let location = window.location.origin;
  let hrefLocation = window.location.href;
  let portLocation = window.location.port;

  let listArr = [portLocation, hrefLocation, location],
    listBox = document.createElement("div"),
    listEl = document.createElement("ul"),
    listItems = listArr.length,
    listItem,
    i;

  document.getElementsByTagName("body")[0].appendChild(listBox);
  listBox.appendChild(listEl);

  for (i = 0; i < listItems; ++i) {
    listItem = document.createElement("li");
    listItem.innerHTML = listArr[i];
    listEl.appendChild(listItem);
  }
}

//on click of button creates a list.
buttonEl.onclick = () => {
  createList();
};

//Function to reload the page via location.
function reloadPage() {
  window.location.reload(true);
}

//Click on button to reload page.
reloadButton.addEventListener("click", () => {
  reloadPage();
});

//An array with objects that will be shown in console.
let idNumbers = [
  { id: 1, Name: "Miyagi", rank: "Master" },
  { id: 2, Name: "Piett", rank: "Master" },
  { id: 3, Name: "Jarl", rank: "Novice" },
  { id: 4, Name: "Vader", rank: "Novice" },
];

// Map the id.
let numbersId = idNumbers.map(function (idnr) {
  return idnr.id;
});
console.log(numbersId);

//Filters out the rank of the ojects.
const rank = idNumbers.filter((masters) => masters.rank === "Master");
console.log(rank);
