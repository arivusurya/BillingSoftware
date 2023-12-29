function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// billing page

amount = unit * price;
currentRow.querySelector("#amount").value = amount;
overallSum();

//Get the overall sum/Total
overallSum = () => {
  var arr = document.getElementsByName("amount");
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].value) {
      total += +arr[i].value;
    }
    document.getElementById("total").value = total;
  }
};

//Delete row from the table
tBody.addEventListener("click", (e) => {
  let el = e.target;
  const deleteROW = e.target.getAttribute("action");
  if (deleteROW == "delete") {
    delRow(el);
    overallSum();
  }
});

//Target row and remove from DOM;
delRow = (el) => {
  el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode);
};
