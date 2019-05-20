
function cal() {
  // course Units values
  var cu1 = document.getElementById("cu1").value;
  var cu2 = document.getElementById("cu2").value;
  var cu3 = document.getElementById("cu3").value;
  var cu4 = document.getElementById("cu4").value;
  var cu5 = document.getElementById("cu5").value;
  var cu6 = document.getElementById("cu6").value;
  var cu7 = document.getElementById("cu7").value;
  var cu8 = document.getElementById("cu8").value;
  var cu9 = document.getElementById("cu9").value;
  var cu10 = document.getElementById("cu10").value;

  // course grade values
  var cg1 = document.getElementById("cg1").value;
  var cg2 = document.getElementById("cg2").value;
  var cg3 = document.getElementById("cg3").value;
  var cg4 = document.getElementById("cg4").value;
  var cg5 = document.getElementById("cg5").value;
  var cg6 = document.getElementById("cg6").value;
  var cg7 = document.getElementById("cg7").value;
  var cg8 = document.getElementById("cg8").value;
  var cg9 = document.getElementById("cg9").value;
  var cg10 = document.getElementById("cg10").value;

  var totalUnits = (+ cu1 + + cu2 + + cu3 + + cu4 + + cu5 + + cu6 + + cu7 + + cu8 + + cu9 + + cu10);
  if (totalUnits < 10) {
    alert("Minimum Course Units is 10");
    return;
  }
  else {
    course1 = (cu1 * cg1)
    course2 = (cu2 * cg2)
    course3 = (cu3 * cg3)
    course4 = (cu4 * cg4)
    course5 = (cu5 * cg5)
    course6 = (cu6 * cg6)
    course7 = (cu7 * cg7)
    course8 = (cu8 * cg8)
    course9 = (cu9 * cg9)
    course10 = (cu10 * cg10)
    var totalGrades = (course1 + course2 + course3 + course4 + course5 + course6 + course7 + course8 + course9 + course10)
    var cgp = Math.round(totalGrades) / totalUnits;
    cgp = cgp.toFixed(2);
    console.log(cgp)
  }
}
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;
  //validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  var total = (billAmt * serviceQual) / numOfPeople;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;


}

//Hide the tip amount on load
// document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function () {
  cal();

};