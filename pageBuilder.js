const container = document.getElementById("container");
const useColor = document.getElementById("useColor");
const widthNum = document.getElementById("widthNum");
const heightNum = document.getElementById("heightNum");
const txt = document.getElementById("text");
const fontColor = document.getElementById("fontColor");
const fontSize = document.getElementById("fontSize");
const frameWidth = document.getElementById("frameWidth");
const frameStyle = document.getElementById("frameStyle");
const frameColor = document.getElementById("frameColor");
const marginInput = document.getElementById("marginInput");
const paddingInput = document.getElementById("paddingInput");
const borderRadius = document.getElementById("borderRadius");
const typeOfElement = document.getElementById("elemType");
const xOffSet = document.getElementById("xOffSet");
const yOffSet = document.getElementById("yOffSet");
const zOffSet = document.getElementById("zOffSet");
const currentDate = new Date();
const removeButton = document.getElementById("cleanBtn");
const saveButton = document.getElementById("saveBtn");

function addElements() {
  const box = document.createElement(typeOfElement.value);
  box.style.width = widthNum.value + "px";
  box.style.height = heightNum.value + "px";
  box.style.border = "1px solid black";
  box.style.backgroundColor = useColor.value;
  box.innerText = txt.value;
  box.style.color = fontColor.value;
  box.style.fontSize = fontSize.value + "px";
  box.style.borderWidth = frameWidth.value + "px";
  box.style.borderStyle = frameStyle.value;
  box.style.borderColor = frameColor.value;
  box.style.margin = marginInput.value + "px";
  box.style.padding = paddingInput.value + "px";
  box.style.borderRadius = borderRadius.value + "px";
  box.style.boxShadow =
    xOffSet.value + "px" + yOffSet.value + "px" + zOffSet.value + "px";
  box.setAttribute("title", `${txt.value}`);
  box.innerHTML += "<p>נוצר בתאריך: " + currentDate.toLocaleString() + "</p>";

  container.appendChild(box);
}
// window.addEventListener('load', loadDocument);

removeButton.addEventListener("click", function () {
  container.innerHTML = "";
  localStorage.clear();
  alert("You have removed the container childs and from the local storage");
});

saveButton.addEventListener("click", function () {
  localStorage.setItem("container", container.outerHTML);
  alert("You have saved the container to the local storage");
});
