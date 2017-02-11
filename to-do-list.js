

var makeElement = function(text) {
  var newToDo = document.createElement("li");
  var newName = document.createTextNode(text);
  newToDo.appendChild(newName);
  var toDoList = document.getElementById("list");
  toDoList.appendChild(newToDo);
  var checkbox = document.createElement('input');
  newToDo.appendChild(checkbox);
  checkbox.setAttribute("type", "checkbox");
};

document.getElementById("button1").onclick = function() {
  var text = document.getElementById("input1").value;
  makeElement(text);
  document.getElementById("input1").value = "";
};